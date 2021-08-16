<template>
  <h1>{{ msg }}</h1>
  <button @click="changeMessage">Change me!</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const msg = ref("Hi!");

const changeMessage = () => {
  msg.value = "Hi 2!";
};
</script>
