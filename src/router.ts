import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
} from "vue-router";

const pages = import.meta.glob("./pages/*.vue");

const routes = Object.keys(pages).map((path) => {
  const pagesRegex = path.match(/\.\/pages(.*)\.vue$/) || "";
  const name = pagesRegex[1].toLowerCase();
  return {
    path: name === "/home" ? "/" : name === "/_404" ? "/:pathMatch(.*)*" : name,
    component: pages[path],
  };
});

export const createRouter = () => {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
};
