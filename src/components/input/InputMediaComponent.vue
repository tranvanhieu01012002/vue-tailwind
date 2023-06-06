<template>
  <div class="input capitalize">
    <input @change="onChange" ref="input" multiple class="hidden" type="file" />
    <div class="text-gray-custom-100"><slot></slot></div>
    <div
      :draggable="true"
      @dragenter="dragover"
      @dragleave="dragleave"
      @drop="drop"
      :class="isDragging ? 'border-2 bg-indigo-300' : 'bg-indigo-100'"
      class="mt-4 flex justify-center items-center w-full h-60 rounded-lg border-dashed border-indigo-200"
    >
      <div class="flex flex-col items-center h-full justify-around">
        <CircleIcon v-if="files.length == 0" :icon-style="icon" />
        <div class="img-show flex">
          <div v-for="(file, index) in files" :key="index" class="img">
            <img
              :draggable="false"
              :src="generateURL(file)"
              class="w-28 h-28 mr-4 rounded-xl"
            />
            <div class="bg-blue-800 w-2 h-2"></div>
          </div>
        </div>
        <p class="text-gray-custom-100">Draw and drop image here</p>
        <ButtonComponent @click="clickBtn" :style="'btn-primary'"
          >Add</ButtonComponent
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CircleIcon from "@/components/icon/CircleIcon.vue";
import ButtonComponent from "../button/ButtonComponent.vue";
import { ref } from "vue";

const input = ref();
const isDragging = ref(false);
const files = ref([]);
const icon = {
  icon: ["fas", "image"],
  borderInside: "bg-violet-400",
  borderOutside: "bg-violet-200",
  color: "text-primary",
  // <font-awesome-icon :icon="['fas', 'film']" />
};

const clickBtn = () => {
  (input.value as HTMLInputElement).click();
};

const dragover = (e: Event) => {
  e.preventDefault();
  isDragging.value = true;
};
const dragleave = () => {
  isDragging.value = false;
};
const drop = (e: any) => {
  e.preventDefault();
  addNewFiles(e);
  isDragging.value = false;
};
const generateURL = (file: File) => {
  let fileSrc = URL.createObjectURL(file);
  setTimeout(() => {
    URL.revokeObjectURL(fileSrc);
  }, 1000);
  return fileSrc;
};

const addNewFiles = (e: any) => {
  files.value = [...files.value, ...(e.dataTransfer.files as never[])];
};

const onChange = () => {
  [...((input.value as HTMLInputElement).files ?? [])].forEach((file) => {
    files.value.push(file as never);
  });
};
</script>
<style scoped lang="scss"></style>
