<template>
  <router-link
    :active-class="'active'"
    :to="category.link ?? '/'"
    class="category flex justify-between rounded-lg text-gray-400 mb-3 ml-10 px-2 pb-2"
  >
    {{ category.name }}
  </router-link>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import { Category } from "@/types";
defineProps({
  category: {
    type: Object as PropType<Category>,
    required: true,
  },
});
</script>
<style scoped>
.category {
  transition: 1s;
}
.active {
  background-color: #5c59e8;
}
</style>
