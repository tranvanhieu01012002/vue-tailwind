<template>
  <div class="btn-group flex">
    <ButtonComponent :style="'btn-white'"
      ><div class="flex justify-center">
        <svg
          class="h-5 w-5 text-gray-400 mr-1 mt-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        buy now
      </div></ButtonComponent
    >
    <ButtonComponent :style="'btn-primary'"
      ><div class="flex justify-center">
        <svg
          class="h-8 w-8 text-white mr-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <div class="mt-1">Add product</div>
      </div></ButtonComponent
    >
  </div>
</template>
<script setup lang="ts">
import ButtonComponent from "@/components/button/ButtonComponent.vue";
</script>
