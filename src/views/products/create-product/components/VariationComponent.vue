<template>
  <PaddingComponent>
    <template #title>variation</template>
    <template #content>
      <div class="content">
        <div
          v-for="(variation, index) in variations"
          :key="index"
          :class="`mb-4 last:mb-0 row grid grid-cols-11 ${GAP_IN_COMPONENT}`"
        >
          <InputComponent
            class="col-span-5"
            :input-tag="Input.SELECT"
            :option="dataOption"
            :value="'data1'"
          >
            {{ variation.type }}
          </InputComponent>
          <InputComponent
            class="col-span-5"
            :value="variation.value"
            @type="
              (valueInput) =>
                updateValue(index, { ...variation, value: valueInput })
            "
            :placeholder="'variation'"
          >
            variation
          </InputComponent>
          <div class="flex justify-end h-full w-full flex-col">
            <button
              @click="removeItem(index)"
              class="bg-red-300 h-10 w-10 rounded-md"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <ButtonComponent @click="addNew" :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">Add product</span>
      </ButtonComponent>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { ButtonComponent } from "@/components";
import { Option, Variation } from "@/types";
import { Input } from "@/enums";
import { GAP_IN_COMPONENT } from "@/constants";
import { onMounted, ref, onBeforeUnmount } from "vue";
import { useProductCompletion } from "@/stores";

const { updateShow } = useProductCompletion();

const dataOption: Option[] = [
  { name: "data1", value: "data1" },
  { name: "data2", value: "data2" },
  { name: "data3", value: "data3" },
];

onMounted(() => {
  updateShow(true);
});

onBeforeUnmount(() => {
  updateShow(false);
});
const addNew = () => {
  variations.value.push({ type: "color", value: "red" });
};

const removeItem = (index: number) => {
  variations.value.splice(index, 1);
};

const updateValue = (index: number, variation: Variation) => {
  variations.value[index] = variation;
};

const variations = ref<Variation[]>([
  {
    type: "color",
    value: "red",
  },
]);
</script>
<style scoped lang="scss"></style>
