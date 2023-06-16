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
            :option="variationsType"
            :value="variation.name"
            @selected="
              (indexVariationType) =>
                updateVariationFromIndexType(
                  index,
                  variation,
                  indexVariationType
                )
            "
          >
            variation type
          </InputComponent>
          <InputComponent
            class="col-span-5"
            :value="variation.value"
            :placeholder="'variation'"
            @type="
              (valueInput) =>
                updateVariation(index, { ...variation, value: valueInput })
            "
          >
            variation
          </InputComponent>
          <div class="flex justify-end h-full w-full flex-col">
            <button
              @click="removeVariation(index)"
              class="bg-red-300 h-10 w-10 rounded-md"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <ButtonComponent @click="createVariation" :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">Add product</span>
      </ButtonComponent>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import {
  PaddingComponent,
  InputComponent,
  ButtonComponent,
} from "@/components";
import { Input } from "@/enums";
import { GAP_IN_COMPONENT } from "@/constants";
import { onMounted } from "vue";
import { useVariationStore } from "@/stores";
import { storeToRefs } from "pinia";
import { Variation } from "@/types";

const { getVariationApi, createVariation, removeVariation, updateVariation } =
  useVariationStore();
const { variationsType, variations } = storeToRefs(useVariationStore());

const updateVariationFromIndexType = (
  index: number,
  currentVariation: Variation,
  indexVariationType: number
) => {
  updateVariation(index, {
    ...currentVariation,
    name: variationsType.value[indexVariationType].name,
  });
};
onMounted(async () => {
  await getVariationApi();
});
</script>
<style scoped lang="scss"></style>
