import { defineStore } from "pinia";
import { ref } from "vue";
import { useNotification } from "@/hooks";
import { ToastStatus } from "@/enums";
const useInventoryStore = defineStore("inventoryStore", () => {
  const SKU = ref("");
  const barcode = ref("");
  const quantity = ref<number>(0);

  const setQuantity = (quantityInput: string) => {
    if (!Number.isNaN(Number(quantityInput))) {
      quantity.value = Number(quantityInput);
    } else {
      useNotification().notify("input number only", ToastStatus.ERROR);
    }
  };
  return { SKU, barcode, quantity, setQuantity };
});
export { useInventoryStore };
