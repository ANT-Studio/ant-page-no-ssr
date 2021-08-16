const fs = require("fs");
const path = require("path");
const express = require("express");

const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === "production"
) {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const indexProd = isProd
    ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8")
    : "";

  const manifest = isProd
    ? // @ts-ignore
      require("./dist/client/ssr-manifest.json")
    : {};

  const app = express();

  let vite: any;
  if (!isProd) {
    // noinspection TypeScriptValidateJSTypes
    vite = await require("vite").createServer({
      root,
      logLevel: isTest ? "error" : "info",
      server: {
        middlewareMode: "ssr",
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
    });

    app.use(vite.middlewares);
  } else {
    app.use(require("compression")());
    app.use(
      require("serve-static")(resolve("dist/client"), {
        index: false,
      })
    );
  }

  app.use("*", async (req: any, res: any) => {
    const url = req.originalUrl;

    try {
      let template, render;
      if (!isProd) {
        template = fs.readFileSync(resolve("index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.ts")).render;
      } else {
        template = indexProd;
        render = require("./dist/server/entry-server.ts").render;
      }

      const [appHtml, preloadLinks] = await render(url, manifest);

      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite && vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(3000, () => {
      console.log("http://localhost:3000");
    })
  );
}

exports.createServer = createServer;
