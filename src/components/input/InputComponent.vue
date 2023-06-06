<template>
  <div class="input capitalize">
    <div class="text-gray-custom-100"><slot></slot></div>
    <component
      :is="inputTag"
      :class="inputTag == Input.TEXTAREA ? '' : 'h-10'"
      class="bg-gray-100 w-full mt-4 rounded-md px-4"
      :rows="row"
      :placeholder="placeholder"
    >
      <option v-for="optionItem in option" :key="optionItem.value">
        {{ optionItem.name }}
      </option>
    </component>
  </div>
</template>
<script setup lang="ts">
import { PropType, defineProps } from "vue";
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
    default: "Input data here...",
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
});
</script>
<style scoped lang="scss"></style>
