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
        :id="id"
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
          :class="[showCss, errorMessage ? 'bg-red-200' : '']"
          :placeholder="InputType.PASSWORD == type ? '' : `${placeholder} ...`"
          :value="inputValue"
          :type="type"
          :contentType="'html'"
          :toolbar="toolbarOptions"
          :content="value"
        />
      </div>
    </div>
    <p class="text-red-600" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script setup lang="ts">
import {
  PropType,
  defineProps,
  defineEmits,
  ref,
  computed,
  onMounted,
  onUnmounted,
  toRef,
  watch,
} from "vue";
import { InputType, Input } from "@/enums";
import { SelectType } from "@/types";
import { useField } from "vee-validate";
import { toolbarOptions } from "./editorConfig";
import { EventBus, EVENT_BUS_LIST } from "@/bus/eventBus";
import * as yup from "yup";
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
  id: {
    type: String,
    required: false,
    default: "input-select-option",
  },
  name: {
    type: String,
    required: false,
    default: "input-name",
  },
  validate: {
    type: Object as PropType<yup.AnySchema>,
    required: false,
    default: undefined,
  },
});
const show = ref(false);
const name = toRef(props, "name");
const {
  value: inputValue,
  errorMessage,
  handleChange,
  meta,
} = useField(name, props.validate, {
  initialValue: props.value,
});

const updateData = (index: number) => {
  emits("selected", index);
  show.value = !show.value;
};

const showCss = computed(() => {
  return `${props.inputTag == Input.TEXTAREA ? "" : "h-10"} ${
    props.icon ? "rounded-r-md" : "rounded-md"
  } bg-gray-100 w-full mt-4 px-4`;
});

watch(errorMessage, (newValue) => {
  if (newValue !== "" && newValue !== undefined) {
    EventBus.emit(EVENT_BUS_LIST.VALIDATE);
  } else {
    EventBus.emit(EVENT_BUS_LIST.REMOVE_VALIDATE);
  }
});

const emits = defineEmits(["type", "iconClick", "selected"]);

const typeAction = (event: Event) => {
  switch (props.inputTag) {
    case Input.TEXTAREA:
      emits("type", (event.target as HTMLInputElement).innerHTML);
      break;
    default:
      emits("type", (event.target as HTMLInputElement).value);
      handleChange((event.target as HTMLInputElement).value);
      break;
  }
};

onMounted(() => {
  window.addEventListener("click", checkActive);
});

onUnmounted(() => {
  window.removeEventListener("click", checkActive);
});

const checkActive = (event: any) => {
  if (!document.getElementById(props.id)?.contains(event.target)) {
    show.value = false;
  }
};
</script>
<style scoped lang="scss"></style>
