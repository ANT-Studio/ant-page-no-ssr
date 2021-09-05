import { createApp } from "./main";

const { app, router, store } = createApp();

router.isReady().then(() => {
  if(window.__INITIAL_STATE__) {
    console.log("Is this here");
    store.replaceState(window.__INITIAL_STATE__)
  }
  console.log(window.__INITIAL_STATE__);

  app.mount("#app");
});
