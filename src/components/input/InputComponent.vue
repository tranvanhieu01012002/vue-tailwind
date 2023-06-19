<template>
  <div class="input capitalize">
    <div class="text-gray-500">
      <slot></slot>
    </div>
    <div class="flex">
      <span
        v-if="inputTag == Input.INPUT && icon"
        class="input-group-text mt-4 pt-2 px-3 bg-gray-100 rounded-tl-md"
      >
        <font-awesome-icon @click="emits('iconClick')" :icon="['fas', icon]" />
      </span>
      <div
        class="input w-full"
        :class="[
          inputTag === Input.TEXTAREA ? 'pb-8' : '',
          inputTag === Input.SELECT ? 'relative' : '',
        ]"
      >
        <template v-if="inputTag === Input.SELECT">
          <button @click="show = !show" :class="showCss" type="button">
            {{ value }}
            <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
          </button>
          <ul
            :class="[
              inputTag === Input.SELECT ? 'absolute' : '',
              inputTag === Input.SELECT && !show ? 'hidden' : '',
            ]"
            class="w-full z-10"
          >
            <li
              v-for="(item, index) in option"
              class="py-3 bg-gray-100 w-full hover:bg-gray-400 text-center align-middle"
              @click="updateData(index)"
              :key="index"
            >
              {{ item.name }}
            </li>
          </ul>
        </template>
        <component
          v-else
          @input="(event: Event) => typeAction(event)"
          :is="inputTag"
          :class="showCss"
          :placeholder="InputType.PASSWORD == type ? '' : `${placeholder} ...`"
          :value="value"
          :type="type"
          :contentType="'html'"
          :toolbar="toolbarOptions"
          :content="value"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, defineProps, defineEmits, ref, computed } from "vue";
import { InputType, Input } from "@/enums";
import { SelectType } from "@/types";
const props = defineProps({
  inputTag: {
    type: String,
    required: false,
    default: Input.INPUT,
  },
  type: {
    type: String,
    required: false,
    default: InputType.TEXT,
  },
  placeholder: {
    type: String,
    required: false,
    default: "Input data here",
  },
  option: {
    type: Object as PropType<SelectType[]>,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
    default: "",
  },
  selectedId: {
    type: Number,
    required: false,
    default: 0,
  },
});
const show = ref(false);

const updateData = (index: number) => {
  emits("selected", index);
  show.value = !show.value;
};

const showCss = computed(() => {
  return `${props.inputTag == Input.TEXTAREA ? "" : "h-10"} ${
    props.icon ? "rounded-r-md" : "rounded-md"
  } bg-gray-100 w-full mt-4 px-4`;
});

const emits = defineEmits(["type", "iconClick", "selected"]);

const typeAction = (event: Event) => {
  switch (props.inputTag) {
    case Input.TEXTAREA:
      emits("type", (event.target as HTMLInputElement).innerHTML);
      break;
    default:
      emits("type", (event.target as HTMLInputElement).value);
      break;
  }
};

const colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gold",
  "Silver",
  "Coral",
  "Turquoise",
  "Magenta",
  "Cyan",
  "Beige",
  "Lavender",
  "Maroon",
  "Olive",
];
const toolbarOptions = [
  ["bold", "italic", "underline"],
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }, { align: [] }],
  [{ color: colors }, { background: colors }],
  ["clean"],
];
</script>
<style scoped lang="scss"></style>
