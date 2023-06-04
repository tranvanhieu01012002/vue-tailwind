<template>
  <div class="bg-gray-300 grid grid-cols-[15%_85%]">
    <div class="px-4 bg-white">
      <LeftBar />
    </div>
    <div class="container-slot">
      <div class="bg-white">
        <HeaderComponent />
      </div>
      <div class="px-5 py-8">
        <BreadcrumbDefault v-if="breadcrumb" />
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LeftBar from "../default/left/LeftBar.vue";
import HeaderComponent from "./header/HeaderComponent.vue";
import BreadcrumbDefault from "@/components/breadcrumb/BreadcrumbDefault.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const breadcrumb = computed(() => {
  console.log(!!route.meta.breadcrumb);
  return !!route.meta.breadcrumb;
});
</script>
<style></style>
