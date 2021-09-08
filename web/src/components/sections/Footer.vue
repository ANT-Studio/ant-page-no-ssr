<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-left">
        <h3 v-html="__('footer.description')" />
        <img src="" alt="logo" />
      </div>
      <div class="footer-right">
        <h2 v-html="__('footer.ourDescription')" />
        <BigLink to="/people">{{ __("footer.us") }}</BigLink>
      </div>
    </div>
    <div class="decoration">
      <div />
      <div />
      <p>ANT Project</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import BigLink from "../BigLink.vue";
import { __ } from "../../assets/utils";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
footer {
  position: relative;
  overflow: hidden;
  z-index: 0;
  .footer-wrapper {
    z-index: 2;
    @include sectionContainer();
    display: flex;
    padding: 5em 0;

    .footer-left {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 4em;

      img {
        width: 20%;
        @include themed() {
          content: t("logo");
        }
      }
    }

    .footer-right {
      text-align: right;
      width: 50%;
      h2 {
        font-size: 2.25em;
        font-weight: bold;
      }
    }
  }

  .decoration {
    div {
      @include decoration() {
        &:first-child {
          top: 0;
          right: 40%;
          margin-top: -12em;
        }

        &:nth-child(2) {
          bottom: 0;
          right: 0;
          margin-top: -12em;
          transform: rotate(90deg);
          margin-right: -7em;
        }
      }
    }

    p {
      position: absolute;
      bottom: -75px;
      left: -80px;
      font-size: 15em;
      font-weight: bold;
      z-index: -1;
      @include themed() {
        color: t("secondary-gray");
      }
    }
  }
}
</style>
