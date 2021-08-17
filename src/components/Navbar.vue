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
      <div class="action" v-for="action in actions">
        <a :href="action.link">
          <img :src="'/images/icons/' + action.icon" alt="" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { __ } from "../assets/utils";
import { routes, actions } from "../assets/constants";
</script>

<style lang="scss" scoped>
@import "../assets/styles/themes.scss";

.navbar {
  padding-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    font-size: 1.3rem;
    gap: 2em;
  }

  .actions {
    display: flex;
  }
}
</style>
