<template>
  <div class="home">
    <Hero />
    <TeamPreview />
  </div>
</template>

<script lang="ts" setup>
import { __ } from "../assets/utils";
import Hero from "../components/Hero.vue";
import TeamPreview from "../components/TeamPreview.vue";
</script>

<style lang="scss" scoped>
@import "../assets/styles/themes";
.home {
}
</style>
