import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoadingStore = defineStore("loadingStore", () => {
  const show = ref(false);

  const toggleShow = () => {
    show.value = !show.value;
  };

  const start = () => {
    show.value = true;
  };

  const done = () => {
    show.value = false;
  };

  const startWithTime = (time = 3) => {
    start();
    setTimeout(() => {
      done();
    }, time * 1000);
  };

  return { toggleShow, start, done, startWithTime, show };
});
