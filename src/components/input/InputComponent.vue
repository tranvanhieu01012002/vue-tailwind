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
        :class="inputTag === Input.TEXTAREA ? 'pb-8' : ''"
      >
        <component
          @input="(event: Event) => typeAction(event)"
          :is="inputTag"
          :class="[
            inputTag == Input.TEXTAREA ? '' : 'h-10',
            icon ? 'rounded-r-md' : 'rounded-md',
          ]"
          class="bg-gray-100 w-full mt-4 px-4"
          :placeholder="InputType.PASSWORD == type ? '' : `${placeholder} ...`"
          :value="value"
          :type="type"
          :contentType="'html'"
          :toolbar="toolbarOptions"
          :content="value"
        >
          <option v-for="optionItem in option" :key="optionItem.value">
            {{ optionItem.name }}
          </option>
        </component>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, defineProps, defineEmits } from "vue";
import { InputType, Input } from "@/enums";
import { Option } from "@/types";
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
    type: Object as PropType<Option[]>,
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
});

const emits = defineEmits(["type", "iconClick"]);

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
