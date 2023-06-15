import { defineStore } from "pinia";
import { ref } from "vue";

const useMediaStore = defineStore("mediaStore", () => {
  const images = ref<File[] | FileList>([]);
  const video = ref();

  const updateImages = (imagesInput: File[] | FileList) => {
    console.log(imagesInput);
    images.value = imagesInput;
  };

  return { images, updateImages };
});
export { useMediaStore };
