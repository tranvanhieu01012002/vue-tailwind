import { authApi } from "@/api";
import { SelectType } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";
import { getUrlAllWithFields } from "@/helpers";
const usePriceStore = defineStore("priceStore", () => {
  const price = ref(0);
  const discountsType = ref<SelectType[]>([]);
  const taxType = ref<SelectType[]>([]);
  const currentDiscountId = ref(0);
  const currentTaxId = ref(0);

  const getDiscountTypeApi = async () => {
    discountsType.value = await callApi(
      getUrlAllWithFields("discounts", "id,name,value")
    );
  };

  const getTaxTypeApi = async () => {
    taxType.value = await callApi(getUrlAllWithFields("tax", "id,name,value"));
  };

  const callApi = async (resource: string) => {
    const { data } = await authApi.get(resource);
    return data.data;
  };

  const getData = async () => {
    try {
      await Promise.all([getDiscountTypeApi(), getTaxTypeApi()]);
    } catch (error) {
      discountsType.value = [];
      taxType.value = [];
    }
  };

  const setValueDiscount = (index: number, value: string) => {
    discountsType.value[index].value = value;
  };

  const setValueTax = (index: number, value: string) => {
    taxType.value[index].value = value;
  };

  const setCurrentDiscountId = (index: number) => {
    currentDiscountId.value = index;
  };

  const setCurrentTaxId = (index: number) => {
    currentTaxId.value = index;
  };

  const setPrice = (inputPrice: number) => {
    price.value = inputPrice;
  };

  return {
    price,
    taxType,
    discountsType,
    currentDiscountId,
    currentTaxId,
    getData,
    setPrice,
    setValueDiscount,
    setValueTax,
    setCurrentTaxId,
    setCurrentDiscountId,
  };
});
export { usePriceStore };
