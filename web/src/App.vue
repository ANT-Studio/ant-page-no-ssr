<template>
  <div class="app">
    <navbar />
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, onServerPrefetch} from "vue";
import { useI18n } from "vue-i18n";
import { DEFAULT_LOCALE } from "./assets/constants";
import Navbar from "./components/Navbar.vue";
import {useStore} from "vuex";

const i18n = useI18n();
const store = useStore();

onServerPrefetch(() => {
  return store.dispatch('increment')
})

onMounted(() => {
  setInterval(() => console.log(store.state.count), 1000);
  i18n.locale.value = localStorage.getItem("lang") || DEFAULT_LOCALE;
  document.body.classList.add("theme");
  document.body.classList.add("theme--dark");
});
</script>

<style lang="scss">
@import "./assets/styles/themes.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");

* {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}

#app {
  @include themed() {
    color: t("text");
    background: t("bg");
  }

  min-width: 100vw;
  min-height: 100vh;
}
</style>
