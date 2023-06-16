import { authApi } from "@/api";
import { getUrlWithFieldsIdName } from "@/helpers";
import { SelectType, Variation } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

const useVariationStore = defineStore("variationStore", () => {
  const variationsType = ref<SelectType[]>([]);
  const variations = ref<Variation[]>([]);

  const getVariationApi = async () => {
    const { data } = await authApi.get(getUrlWithFieldsIdName("variations"));
    variationsType.value = data.data.data;
    setVariations();
  };

  const setVariations = () => {
    variationsType.value.map((item) => {
      variations.value.push({
        ...item,
        value: "",
      });
    });
  };

  const createVariation = () => {
    variations.value.push({ ...variationsType.value[0], id: 0, value: "" });
  };

  const removeVariation = (index: number) => {
    variations.value.splice(index, 1);
  };

  const updateVariation = (index: number, variation: Variation) => {
    variations.value[index] = variation;
  };

  return {
    variationsType,
    variations,
    getVariationApi,
    createVariation,
    removeVariation,
    updateVariation,
  };
});
export { useVariationStore };
