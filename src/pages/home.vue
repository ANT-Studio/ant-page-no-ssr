<template>
  {{ __("test", { whatToHello: "world" }) }}
</template>

<script lang="ts" setup>
import { __ } from "../assets/utils";
</script>
