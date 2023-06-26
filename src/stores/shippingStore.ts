import { ShippingType } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useShippingStore = defineStore("shippingStore", () => {
  const isPhysical = ref(false);
  const shippingInfo = ref<ShippingType>({
    length: 10,
    width: 0,
    height: 0,
    weight: 0,
  });
  const toggleShipping = () => {
    isPhysical.value = !isPhysical.value;
  };
  const updateShippingInfo = (newShipping: ShippingType) => {
    shippingInfo.value = newShipping;
  };

  return { isPhysical, shippingInfo, toggleShipping, updateShippingInfo };
});
