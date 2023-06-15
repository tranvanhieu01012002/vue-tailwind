import { defineStore } from "pinia";
import { ref } from "vue";

const useInventoryStore = defineStore("inventoryStore", () => {
  const SKU = ref("");
  const barcode = ref("");
  const quantity = ref<number>(0);

  const setQuantity = (quantityInput: string) => {
    if (!Number.isNaN(Number(quantityInput))) {
      console.log(quantity.value);
      quantity.value = Number(quantityInput);
    }
  };
  return { SKU, barcode, quantity, setQuantity };
});
export { useInventoryStore };
