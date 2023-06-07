import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductCompletion = defineStore("productCompletion", () => {
  const isShow = ref(false);
  const percent = ref(0);

  const updateShow = (newStatus: boolean) => {
    isShow.value = newStatus;
  };

  return { isShow, percent, updateShow };
});
