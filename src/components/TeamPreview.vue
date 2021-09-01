<template>
  <div class="our-team">
    <div class="our-team-wrapper">
      <div class="our-team-title">
        <h2>{{ __("teamPreview.title") }}</h2>
        <p>{{ __("teamPreview.subtitle") }}</p>
      </div>
      <div class="our-team-members">
        <MemberCard
          avatar="Platfus"
          name="Szymon Pawlus"
          position="1st dzban"
          description="Jestem profesjonalnym programistą który umie programować w C, C++, HTML, CSS, JS, TS, PHP, MYSQL, Python, Lisp, Julia, Go, Kotlin, Haskell, Lua, Rust, Ruby, Ruby on Rails, C#, Laravel, JSX, SCSS, SASS, .NET, ASP.NET, WPF, Node.js, CoffeScript, JSON oraz nie lubię pić herbaty"
        />
        <MemberCard
          avatar="Peter"
          name="Piotrek Pilszczek"
          position="2st dzban"
          description="Programowanie w CSS to moja pasja. Uwielbiam pisać również backend w języku programowania HTML."
        />
      </div>
    </div>

    <div class="decoration">
      <div />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { __ } from "../assets/utils";
import MemberCard from "./MemberCard.vue";
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins";
@import "../assets/styles/themes";

.our-team {
  overflow: hidden;
  position: relative;
  @include themed() {
    background: t("secondary-bg");
  }

  .our-team-wrapper {
    @include sectionContainer();

    .our-team-title {
      h2 {
        font-size: 3em;
        font-weight: 900;
        padding: 2em 0 1em;
      }

      p {
        font-size: 1.5em;
      }
    }

    .our-team-members {
      padding: 7em 0;
      display: flex;
      gap: 5em;
    }
  }

  .decoration {
    div {
      @include decoration() {
        &:first-child {
          top: 0;
          right: 0;
          transform: rotate(90deg);
          margin-right: 20em;
          margin-top: -8em;
        }
      }
    }
  }
}
</style>
