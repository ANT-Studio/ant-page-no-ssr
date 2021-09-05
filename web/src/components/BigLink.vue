<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>

<script lang="ts" setup>
defineProps<{
  to: string;
}>();
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/themes";

a {
  font-size: 9em;
  color: $main-color;
  text-decoration: none;
  font-weight: 900;
  transition: text-shadow 0.1s ease-in-out;

  @include themed() {
    text-shadow: 0.06em 0.06em 0 t("main-shadow");

    &:hover {
      text-shadow: 0.045em 0.045em 0 t("main-shadow");
    }
  }
}
</style>
