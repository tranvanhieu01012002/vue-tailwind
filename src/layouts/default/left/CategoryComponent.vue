<template>
  <div class="">
    <component
      :is="category.children?.length ? 'div' : 'router-link'"
      :to="category.link ?? '/'"
      active-class="active"
      :class="[category.children?.length && parentActive ? 'bg-sky-200' : '']"
      class="category flex justify-between rounded-lg text-gray-400 mb-3 px-2 pb-2"
      @click="toggleArrow"
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
      <div class="toggle pt-3">
        <div v-if="category.children?.length" class="arrow">
          <font-awesome-icon
            class="angle-up"
            :style="{ transform: `rotate(${angle}deg)` }"
            :icon="['fas', 'angle-up']"
          />
        </div>
      </div>
    </component>
    <div ref="child" class="child-category">
      <template v-if="angle !== 0">
        <ChildCategory
          v-for="(item, index) in category.children"
          :key="index"
          :category="item"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType, ref } from "vue";
import { Category } from "@/types";
import ChildCategory from "./ChildCategory.vue";
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
const angle = ref(0);
const child = ref();
const toggleArrow = () => {
  angle.value = angle.value === 0 ? -180 : 0;
};
</script>
<style lang="scss" scoped>
.active {
  background-color: #5c59e8;
}

.angle-up {
  transition: all 0.5s ease-in-out;
}
.child-category {
  transition: all 0.5s;
}
</style>
