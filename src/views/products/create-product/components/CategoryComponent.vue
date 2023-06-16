<template>
  <PaddingComponent>
    <template #title>Category</template>
    <template #content>
      <div :class="`grid grid-flow-row auto-rows-max ${GAP_IN_COMPONENT}`">
        <InputComponent
          :input-tag="Input.SELECT"
          :option="categories"
          @selected="(value) => (currentCategoryId = value)"
          :value="categories ? categories[currentCategoryId].name : 'loading'"
        >
          select category
        </InputComponent>
        <InputComponent
          :input-tag="Input.SELECT"
          :option="tags"
          @selected="(value) => (currentTagId = value)"
          :value="tags ? tags[currentTagId].name : 'loading'"
        >
          product tags
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { Input } from "@/enums";
import { GAP_IN_COMPONENT } from "@/constants";
import { useCategoryStore } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const { categories, tags, currentCategoryId, currentTagId } = storeToRefs(
  useCategoryStore()
);
const { getCategoriesApi, getTagsApi } = useCategoryStore();
onMounted(async () => {
  try {
    await Promise.all([getCategoriesApi(), getTagsApi()]);
  } catch (error) {
    console.log(error);
  }
});
</script>
<style scoped lang="scss"></style>
