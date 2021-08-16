<template>
  <HelloWorld :msg="msg" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

const msg = ref("Hello again :D");
</script>
