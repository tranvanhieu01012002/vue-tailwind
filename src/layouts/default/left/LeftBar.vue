<template>
  <div class="flex flex-col">
    <BranchComponent />
    <div class="categories">
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
    </div>
  </div>
</template>
<script setup lang="ts">
import BranchComponent from "./BranchComponent.vue";
import CategoryComponent from "./CategoryComponent.vue";
</script>
