<template>
  <component :is="layout">
    <router-view />
  </component>
  <FullScreenLoading />
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { FullScreenLoading } from "./components";
const defaultLayout = "default";
const route = useRoute();
const layout = computed((): string => {
  return `${route.meta.layout ?? defaultLayout}-layout`;
});
</script>
<style></style>
