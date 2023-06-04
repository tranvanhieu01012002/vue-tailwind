<template>
  <router-link
    :to="category.link"
    active-class="active"
    class="category flex justify-between rounded-lg text-gray-400 mb-3 px-2"
  >
    <div class="category-left flex pt-1 text-2xl">
      <font-awesome-icon class="mt-1" :icon="category.icon" />
      <div class="category-left__text pl-2 pt-1 capitalize">
        {{ category.name }}
      </div>
    </div>
    <div class="toggle pt-3"><ToggleArrow /></div>
  </router-link>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue";
import ToggleArrow from "@/components/ToggleArrow.vue";
import { Category } from "@/types";
defineProps({
  category: {
    type: Object as PropType<Category>,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.active {
  background-color: #5c59e8;
}
</style>
