<template>
  <div class="flex flex-col justify-between h-screen relative">
    <div class="top">
      <BranchComponent />
      <div class="categories">
        <CategoryComponent
          v-for="(category, index) in listCategory"
          :key="index"
          :category="category"
        />
      </div>
    </div>
    <div class="bottom fixed bottom-1 pb-5 text-3xl text-gray-400">
      <div class="support">
        <font-awesome-icon :icon="['fas', 'headphones']" />
        <strong class="text-xl ml-2">Support</strong>
      </div>
      <div class="support pt-4">
        <font-awesome-icon class="gear" :icon="['fas', 'gear']" />
        <strong class="ml-2 text-xl">Setting</strong>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BranchComponent from "./BranchComponent.vue";
import CategoryComponent from "./CategoryComponent.vue";
import { listCategory } from "./categories";
</script>
<style scoped lang="scss">
.gear {
  transition: all 0.5s ease-in-out 0s;
}
.gear:hover {
  cursor: default;
  transform: rotate(360deg);
  transition: all 0.5s ease-in-out 0s;
}
</style>
