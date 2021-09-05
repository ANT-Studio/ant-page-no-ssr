<template>
  <div class="projects">
    <div class="projects-wrapper">
      <div class="projects-content-title">
        <h2>{{ __("projects.title") }}</h2>
        <p>{{ __("projects.subtitle") }}</p>
      </div>
      <div class="projects-content">
        <div class="projects-title">
          <h2>{{ __("projects.seeAllProjects") }}</h2>
          <BigLink to="/projects">{{
            __("projects.seeAllProjectsLink")
          }}</BigLink>
        </div>
        <div class="projects-list">
          <ProjectPreview
            title="Project Name"
            logo="/images/Logo.svg"
            description="This is some simple description"
            website="test"
          />
          <ProjectPreview
            title="Project Name"
            logo="/images/Logo.svg"
            description="This is some simple description"
            github="test"
          />
          <ProjectPreview
            title="Project Name"
            logo="/images/Logo.svg"
            description="This is some simple description"
            website="test"
            github="test"
          />
        </div>
      </div>
    </div>

    <div class="decoration">
      <div />
      <div />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProjectPreview from "../ProjectPreview.vue";
import { __ } from "../../assets/utils";
import BigLink from "../BigLink.vue";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins";

.projects {
  overflow: hidden;
  position: relative;

  .projects-wrapper {
    @include sectionContainer();

    .projects-content-title {
      @include sectionTitle();

      text-align: right;
    }

    .projects-content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .projects-title {
        width: 20em;

        h2 {
          font-weight: 900;
          font-size: 2.25em;
        }
      }
    }

    .projects-list {
      width: 40%;
      margin: 7em 0;
      display: flex;
      flex-direction: column;
      gap: 3em;
    }
  }

  .decoration {
    div {
      @include decoration() {
        &:first-child {
          top: 0;
          left: 0;
          transform: rotate(90deg);
          margin-left: -7em;
          margin-top: 8em;
        }

        &:last-child {
          bottom: 0;
          right: 0;
          transform: rotate(90deg);
          margin-right: -7em;
          margin-bottom: -2em;
        }
      }
    }
  }
}
</style>
