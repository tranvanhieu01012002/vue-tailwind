<template>
  <div class="input capitalize">
    <input @change="onChange" ref="input" multiple class="hidden" type="file" />
    <div class="text-gray-custom-100"><slot></slot></div>
    <div
      :draggable="true"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
      :class="isDragging ? 'border-2 bg-indigo-300' : 'bg-indigo-100'"
      class="mt-4 flex justify-center items-center w-full h-60 rounded-lg border-dashed border-indigo-200"
    >
      <div class="flex flex-col items-center h-full justify-around">
        <CircleIcon v-if="files.length == 0" :icon-style="icon" />
        <div class="img-show flex">
          <div v-for="(file, index) in files" :key="index" class="img relative">
            <img
              :draggable="false"
              :src="generateURL(file)"
              class="w-28 h-28 mr-4 rounded-xl"
            />
            <font-awesome-icon
              class="w-4 h-4 bg-green-300 rounded-full p-1 absolute top-1 right-5"
              :icon="['fas', 'check']"
            />
          </div>
        </div>
        <p class="text-gray-custom-100">Draw and drop <slot></slot> here</p>
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
import { ref, defineProps } from "vue";
import { useNotification } from "@/hooks";
import { ToastStatus } from "@/enums";

const props = defineProps({
  iconType: {
    type: String,
    required: false,
    default: "image",
  },
});
const { notify } = useNotification();

const allowedExtension = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/bmp",
];

const input = ref();
const isDragging = ref(false);
const files = ref([]);
const icon = {
  icon: ["fas", props.iconType],
  borderInside: "bg-violet-400",
  borderOutside: "bg-violet-200",
  color: "text-primary",
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
  addNewFiles(e.dataTransfer.files);
  isDragging.value = false;
};
const generateURL = (file: File) => {
  let fileSrc = URL.createObjectURL(file);
  setTimeout(() => {
    URL.revokeObjectURL(fileSrc);
  }, 1000);
  return fileSrc;
};

const addNewFiles = (filesInput: FileList | File[]) => {
  files.value = [...files.value, ...(filesInput as never[])];
};

const onChange = () => {
  const files = [...((input.value as HTMLInputElement).files ?? [])];
  addNewFiles(validateFile(files));
};

const validateFile = (inputFile: File[]) => {
  const validatedFile: File[] = [];
  [...inputFile].map((file: File) => {
    if (allowedExtension.indexOf(file.type) > -1) {
      validatedFile.push(file);
    } else {
      notify(`can not push file ${file.name}`, ToastStatus.ERROR);
    }
  });
  return validatedFile;
};
</script>
<style scoped lang="scss"></style>
