<template>
  <div
    class="category active flex justify-between rounded-lg text-gray-400 mb-3"
  >
    <div class="category-left flex pt-1">
      <svg
        class="h-8 w-8 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
      <div class="category-left__text pl-2 pt-1">Dashboard</div>
    </div>
    <ToggleArrow />
  </div>
</template>
<script setup lang="ts">
import ToggleArrow from "@/components/ToggleArrow.vue";
</script>
<style lang="scss" scoped>
// .active {
//   background-color: #5c59e8;
// }
</style>
