<!--suppress HtmlUnknownTarget -->
<template>
  <nav class="navbar">
    <div class="logo" />
    <div class="links">
      <div class="link" v-for="link in routes" :key="link.label">
        <router-link :to="link.link">
          {{ __(link.label) }}
        </router-link>
      </div>
    </div>
    <div class="actions">
      <div class="social-actions">
        <div v-for="action in actions">
          <a :href="action.link" class="action">
            <img :src="'/images/icons/' + action.icon" alt="" />
          </a>
        </div>
      </div>
      <div>
        <button class="contact-us">{{ __("navbar.contactUs") }}</button>
      </div>
      <div>
        <button class="theme-switcher" @click="toggleTheme()">
          <img src="/images/icons/theme.svg" alt="" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useColorTheme, __ } from "../assets/utils";
import { routes, actions } from "../assets/constants";

const { toggleTheme } = useColorTheme();
</script>

<style lang="scss" scoped>
@import "../assets/styles/themes";
@import "../assets/styles/mixins";

.navbar {
  position: relative;
  z-index: 20;
  padding-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80vw;
  margin: 0 auto;

  .logo {
    @include themed() {
      background: t("logo");
    }

    background-repeat: no-repeat;
    width: 141px;
    height: 58px;
  }

  .links {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    gap: 3em;

    a {
      @include themed() {
        color: t("text") !important;
      }

      text-decoration: none;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    img {
      @include themed() {
        filter: t("invert");
      }
    }

    .social-actions {
      display: flex;
      align-items: center;
      gap: 2em;

      a {
        display: block;
      }
    }

    .contact-us {
      @include themed() {
        @include button(t("secondary"), t("text"), t("main-shadow"));
      }
      margin-left: 5em;
    }

    .theme-switcher {
      background: none;
      border: none;
      outline: none;
      padding: 0;
      margin-left: 5em;
    }
  }
}
</style>
