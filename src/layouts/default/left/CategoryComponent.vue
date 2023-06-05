<template>
  <component
    :is="!category.children?.length ? 'router-link' : 'div'"
    :to="category.link ?? '/'"
    active-class="active"
    :class="[category.children?.length && parentActive ? 'bg-sky-200' : '']"
    class="category flex justify-between rounded-lg text-gray-400 mb-3 px-2 pb-2"
  >
    <div class="category-left flex pt-1 text-xl">
      <font-awesome-icon
        v-if="category.icon.length !== 0"
        class="mt-2"
        :icon="category.icon"
      />
      <div class="category-left__text pl-2 pt-1 capitalize">
        {{ category.name }}
      </div>
    </div>
    <div class="toggle pt-3"><ToggleArrow /></div>
  </component>
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
  parentActive: {
    type: Boolean,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.active {
  background-color: #5c59e8;
}
</style>
