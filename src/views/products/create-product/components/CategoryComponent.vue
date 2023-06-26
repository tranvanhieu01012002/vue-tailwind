<template>
  <PaddingComponent>
    <template #title>Category</template>
    <template #content>
      <div :class="`grid grid-flow-row auto-rows-max ${GAP_IN_COMPONENT}`">
        <InputComponent
          v-if="categories?.length != 0"
          :id="'category-input'"
          :input-tag="Input.SELECT"
          :option="categories"
          @selected="(value) => setCurrentCategoryId(+value)"
          :value="categories ? categories[currentCategoryId].name : 'loading'"
        >
          select category
        </InputComponent>
        <ListSelected
          :list="selectedCategories"
          @remove-item="(index) => deleteSelectedCategory(index)"
        />
        <InputComponent
          v-if="tags?.length != 0"
          :id="'tag-input'"
          :input-tag="Input.SELECT"
          :option="tags"
          @selected="(value) => setCurrentTagId(+value)"
          :value="tags ? tags[currentTagId].name : 'loading'"
        >
          product tags
        </InputComponent>
        <ListSelected
          :list="selectedTags"
          @remove-item="(index) => deleteSelectedTag(index)"
        />
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import ListSelected from "./ListSelected.vue";
import { Input } from "@/enums";
import { GAP_IN_COMPONENT } from "@/constants";
import { useCategoryStore } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const {
  categories,
  tags,
  currentCategoryId,
  currentTagId,
  selectedCategories,
  selectedTags,
} = storeToRefs(useCategoryStore());
const {
  getCategoriesApi,
  getTagsApi,
  setCurrentCategoryId,
  deleteSelectedCategory,
  setCurrentTagId,
  deleteSelectedTag,
} = useCategoryStore();
onMounted(async () => {
  try {
    await Promise.all([getCategoriesApi(), getTagsApi()]);
  } catch (error) {
    console.log(error);
  }
});
</script>
<style scoped lang="scss"></style>
