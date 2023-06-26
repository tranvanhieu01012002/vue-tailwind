import { defineStore } from "pinia";
import { ref } from "vue";

const useMediaStore = defineStore("mediaStore", () => {
  const images = ref<File[]>([]);
  const video = ref();

  const updateImages = (imagesInput: File[]) => {
    console.log(imagesInput);
    images.value = imagesInput;
  };

  return { images, updateImages };
});
export { useMediaStore };
