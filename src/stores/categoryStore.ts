import { authApi } from "@/api";
import { SelectType } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";
import { getUrlWithFieldsIdName } from "@/helpers";
const useCategoryStore = defineStore("categoryStore", () => {
  const categories = ref<SelectType[]>([]);
  const tags = ref<SelectType[]>([]);
  const selectedCategories = ref<SelectType[]>([]);
  const selectedTags = ref<SelectType[]>([]);
  const currentCategoryId = ref(0);
  const currentTagId = ref(0);

  const getCategoriesApi = async () => {
    categories.value = await callApi(getUrlWithFieldsIdName("categories"));
  };

  const getTagsApi = async () => {
    tags.value = await callApi(getUrlWithFieldsIdName("tags"));
  };

  const callApi = async (resource: string) => {
    const { data } = await authApi.get(resource);
    return data.data.data;
  };

  const addNewSelectedCategory = (index: number) => {
    const category = categories.value[index];
    if (
      selectedCategories.value.filter((item) => item.name === category.name)
        .length === 0
    ) {
      selectedCategories.value.push(category);
    }
  };

  const deleteSelectedCategory = (index: number) => {
    selectedCategories.value.splice(index, 1);
  };

  const setCurrentCategoryId = (index: number) => {
    currentCategoryId.value = index;
    addNewSelectedCategory(index);
  };

  const addAddNewSelectedTag = (index: number) => {
    const tag = tags.value[index];
    if (
      selectedTags.value.filter((item) => item.name === tag.name).length === 0
    ) {
      selectedTags.value.push(tag);
    }
  };

  const setCurrentTagId = (index: number) => {
    currentTagId.value = index;
    addAddNewSelectedTag(index);
  };

  const deleteSelectedTag = (index: number) => {
    selectedTags.value.splice(index, 1);
  };

  return {
    categories,
    tags,
    currentTagId,
    currentCategoryId,
    selectedCategories,
    selectedTags,
    getCategoriesApi,
    getTagsApi,
    deleteSelectedCategory,
    setCurrentCategoryId,
    setCurrentTagId,
    deleteSelectedTag,
  };
});

export { useCategoryStore };
