import { createApp } from "./main";
import { renderToString, SSRContext } from "@vue/server-renderer";
import { Manifest } from "vite";

export const render = async (url: string, manifest: Manifest) => {
  const { app, router } = createApp();

  await router.push(url);
  await router.isReady();

  const ctx: SSRContext = {
    state: store.state,
    rendered: () => state = store.state
  };

  const renderState = `
   <script>
    window.__INITIAL_STATE__ = ${JSON.stringify(store.state)}
   </script>
  `

  let html = await renderToString(app, ctx);
  html += renderState;

  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
};

const renderPreloadLinks = (modules: string[], manifest: any) => {
  let links = "";
  const seen = new Set();
  modules.forEach((id) => {
    const files: string[] = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
};

const renderPreloadLink = (file: string) => {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
};
