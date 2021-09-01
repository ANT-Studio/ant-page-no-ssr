<template>
  <div class="member-card">
    <div class="member-card-image">
      <img
        :src="'/images/avatar/' + avatar + 'Avatar.jpeg'"
        :alt="avatar + '\'s avatar'"
      />
    </div>
    <div class="member-card-content">
      <h3>{{ position }}</h3>
      <h1>{{ name }}</h1>
      <p>
        {{ description.round() }}
      </p>
    </div>
    <div class="member-card-actions">
      <a>About me</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  avatar: string;
  position: string;
  name: string;
  description: string;
}>();
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.member-card {
  width: 22em;

  .member-card-image {
    img {
      width: 100%;
    }
  }

  .member-card-content {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding-top: 2em;

    h3 {
      font-size: 1.5em;
      font-weight: normal;
    }

    h1 {
      font-size: 2.25em;
      font-weight: 800;
    }

    p {
      padding-bottom: 2em;
    }
  }

  .member-card-actions {
    a {
      color: $main-color;
      font-weight: 900;
      font-size: 1.5em;
    }
  }
}
</style>
