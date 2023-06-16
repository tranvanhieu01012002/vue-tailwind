import { authApi } from "@/api";
import { SelectType } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";
import { getUrlWithFieldsIdName } from "@/helpers";
const useCategoryStore = defineStore("categoryStore", () => {
  const categories = ref<SelectType[]>();
  const tags = ref<SelectType[]>();
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
