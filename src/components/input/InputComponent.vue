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
        :class="inputTag === Input.TEXTAREA ? 'pb-2' : ''"
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
          :content="{
            ops: [
              { insert: 'The Two Towers' },
              { insert: '\n', attributes: { header: 1 } },
              { insert: 'Aragorn sped on up the hill.\n' },
            ],
          }"
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
  if (props.inputTag == Input.TEXTAREA) {
    emits("type", (event.target as HTMLInputElement).innerHTML);
    console.log((event.target as HTMLInputElement).innerHTML);
  } else {
    emits("type", (event.target as HTMLInputElement).value);
  }
};
</script>
<style scoped lang="scss"></style>
