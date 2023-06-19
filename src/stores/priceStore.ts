import { authApi } from "@/api";
import { Discount, Tax } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

const usePriceStore = defineStore("priceStore", () => {
  const price = ref(0);
  const discountsType = ref<Discount[]>([]);
  const taxType = ref<Tax[]>([]);

  const getDiscountTypeApi = async () => {
    discountsType.value = await callApi("discounts");
  };

  const getTaxTypeApi = async () => {
    taxType.value = await callApi("tax");
  };

  const callApi = async (resource: string) => {
    const { data } = await authApi.get(resource);
    return data.data.data;
  };

  const getData = async () => {
    try {
      await Promise.all([getDiscountTypeApi(), getTaxTypeApi()]);
    } catch (error) {
      console.log("error");
    }
  };

  return {
    price,
    taxType,
    discountsType,
    getData,
  };
});
export { usePriceStore };
