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
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { DEFAULT_LOCALE } from "./assets/constants";
import Navbar from "./components/Navbar.vue";

const i18n = useI18n();

onMounted(() => {
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

#app {
  @include themed() {
    color: t("text");
    background: t("bg");
  }

  min-width: 100vw;
  min-height: 100vh;

  .app {
    max-width: 80vw;
    margin: 0 auto;
  }
}
</style>
