<template>
  <div class="project-preview">
    <div class="project-preview-head">
      <div class="project-logo">
        <img :src="logo" :alt="`${title}'s logo`" />
      </div>
      <div class="project-preview-title">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="project-preview-links">
      <a v-if="website" :href="website"
        ><!--suppress HtmlUnknownTarget -->
        <img src="/images/icons/website.svg" alt=""
      /></a>
      <a v-if="github" :href="github"
        ><!--suppress HtmlUnknownTarget -->
        <img src="/images/icons/github.svg" alt=""
      /></a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  logo: string;
  title: string;
  description: string;
  website?: string;
  github?: string;
}>();
</script>

<style lang="scss" scoped>
@import "../assets/styles/themes";

.project-preview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 3em;
  gap: 3em;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  @include themed() {
    background: t("secondary-gray");
    box-shadow: 1.25em 1.25em 0 t("secondary-gray-shadow");

    &:hover {
      background: t("secondary");
      box-shadow: 0.75em 0.75em 0 t("secondary-gray-shadow");
    }
  }

  .project-preview-head {
    display: flex;
    align-items: center;
    gap: 3em;

    .project-logo {
      height: 2em;
      width: 2em;
      overflow: hidden;
    }

    .project-preview-title {
      h2 {
        font-size: 2.25em;
        margin-bottom: 0.25em;
      }

      p {
        font-size: 1.125em;
      }
    }
  }

  .project-preview-links {
    display: flex;
    gap: 3em;
    align-items: center;

    a {
      @include themed() {
        color: t("text");
        filter: t("invert");
      }

      text-decoration: none;
      width: 2em;

      img {
        width: 100%;
      }
    }
  }
}
</style>
