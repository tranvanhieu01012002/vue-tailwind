import { authApi } from "@/api";
import { SelectType } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

const useCategoryStore = defineStore("categoryStore", () => {
  const categories = ref<SelectType[]>();
  const tags = ref<SelectType[]>();
  const fields = "fields=id,name";
  const currentCategoryId = ref(0);
  const currentTagId = ref(0);
  const getCategoriesApi = async () => {
    const { data } = await authApi.get(`categories?${fields}`);
    categories.value = data.data.data;
    return categories.value;
  };

  const getTagsApi = async () => {
    const { data } = await authApi.get(`tags?${fields}`);
    tags.value = data.data.data;
    return tags.value;
  };

  return {
    categories,
    tags,
    currentTagId,
    currentCategoryId,
    getCategoriesApi,
    getTagsApi,
  };
});

export { useCategoryStore };
