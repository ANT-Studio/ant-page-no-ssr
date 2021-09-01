<template>
  <div class="hero">
    <div class="hero-wrapper">
      <div class="hero-content">
        <h3>Ant Project will make your dream apps</h3>
        <h1>Let the ants create your future.</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing mi
          pellentesque orci nec.
        </h2>
        <div class="actions">
          <button class="contact">{{ __("navbar.contactUs") }}</button>
          <button class="about">{{ __("navbar.about") }}</button>
        </div>
      </div>
      <div class="hero-image">
        <img src="/images/HeroImage.svg" alt="Hero Image" />
      </div>
    </div>

    <div class="decoration">
      <div />
      <div />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { __ } from "../assets/utils";
</script>

<!--suppress CssUnknownTarget -->
<style lang="scss" scoped>
@import "../assets/styles/themes";
@import "../assets/styles/mixins";

.hero {
  width: 100vw;
  /* FIXME: navbar height has to be calculated automatically */
  min-height: calc(100vh - 90px);
  position: relative;

  .hero-wrapper {
    @include sectionContainer();

    display: flex;
    justify-content: space-between;
    gap: 3em;
    .hero-content {
      word-break: keep-all;

      h1 {
        font-size: 4.5em;
        font-weight: 900;
        padding: 0.5em 0;
      }

      h2 {
        font-size: 1.75em;
        font-weight: normal;
      }

      h3 {
        font-size: 1.5em;
        text-transform: uppercase;
        font-weight: 600;
      }

      .actions {
        display: flex;
        gap: 1em;
        width: 60%;
        margin-top: 5em;

        button {
          width: 100%;
        }

        .contact {
          @include themed() {
            @include button(t("main-gradient"), white, t("main-shadow"));
          }
        }

        .about {
          @include themed() {
            @include button(t("secondary"), t("text"), t("main-shadow"));
          }
        }
      }
    }

    .hero-image {
      min-width: 50%;

      img {
        width: 100%;
      }
    }
  }

  .decoration {
    div {
      @include themed() {
        filter: t("invert");
      }

      position: absolute;
      width: 150px;
      height: 300px;
      background: url("/images/Grid.svg") no-repeat;

      &:first-child {
        margin-left: -3em;
        margin-top: 24em;
        top: 0;
        left: 0;
      }

      &:last-child {
        top: 0;
        right: 0;
        transform: rotate(90deg);
        margin-right: -7em;
        margin-top: -5em;
      }
    }
  }
}
</style>
