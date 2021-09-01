<template>
  <div class="home">
    <Hero />
    <div class="our-team">Our team</div>
    <div class="our-team2">Our team 2</div>
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
  .hero {
    width: 100vw;
    min-height: 100vh;
    z-index: 10;
    margin-top: 7em;

    .hero-wrapper {
      margin: 0 auto;
      width: 80vw;
    }
  }

  .our-team {
    background-color: red;
    height: inherit;
  }
}
</style>
