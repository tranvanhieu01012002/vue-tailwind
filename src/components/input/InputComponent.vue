<template>
  <div class="input capitalize">
    <div class="text-gray-500"><slot></slot></div>
    <div class="flex">
      <span
        v-if="inputTag == Input.INPUT && icon"
        class="input-group-text mt-4 pt-2 px-3 bg-gray-100 rounded-tl-md"
      >
        <font-awesome-icon :icon="['fas', icon]" />
      </span>
      <component
        @input="(event: Event) => emits('type',(event.target as HTMLInputElement).value)"
        :is="inputTag"
        :class="[
          inputTag == Input.TEXTAREA ? '' : 'h-10',
          icon ? 'rounded-r-md' : 'rounded-md',
        ]"
        class="bg-gray-100 w-full mt-4 px-4"
        :rows="row"
        :placeholder="`${placeholder} ...`"
        :value="value"
      >
        <option v-for="optionItem in option" :key="optionItem.value">
          {{ optionItem.name }}
        </option>
      </component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, defineProps, defineEmits } from "vue";
import { InputType, Input } from "@/enums";
import { Option } from "@/types";
defineProps({
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
  row: {
    type: Number,
    required: false,
    default: 10,
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

const emits = defineEmits(["type"]);
</script>
<style scoped lang="scss"></style>
