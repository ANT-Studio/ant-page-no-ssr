import App from "./App.vue";
import { createSSRApp } from "vue";
import { createRouter } from "./router";
import { createI18n } from "vue-i18n";
import { DEFAULT_LOCALE } from "./assets/constants";
import { createStore } from 'vuex'

const getLocales = () => {
  const locales = import.meta.globEager("./assets/locales/*.json");
  let messages: Record<string, any> = {};

  Object.keys(locales).map((locale) => {
    messages = {
      ...messages,
      [locale.replace(".json", "").replace("./assets/locales/", "")]:
        locales[locale],
    };
  });

  return messages;
};

export const createApp = () => {
  const app = createSSRApp(App);
  const router = createRouter();

  const i18n = createI18n({
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: getLocales(),
  });

  const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state: any) {
        state.count++
      }
    },
    actions: {
      increment(context) {
        context.commit('increment')
      }
    }
  });

  app.use(router);
  app.use(i18n);
  app.use(store);

  return { app, router, store };
};
