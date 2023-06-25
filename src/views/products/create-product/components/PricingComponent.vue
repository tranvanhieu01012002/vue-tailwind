<template>
  <PaddingComponent>
    <template #title>pricing</template>
    <template #content>
      <div :class="`grid grid-rows-3 ${GAP_IN_COMPONENT} grid-flow-col`">
        <InputComponent
          class="col-span-2"
          :icon="'dollar-sign'"
          :placeholder="'type base price here'"
        >
          basic price
        </InputComponent>
        <InputComponent
          :id="'tag-input'"
          :input-tag="Input.SELECT"
          :option="discountsType"
          :value="discountsType.length == 0 ? 'loading' : discountsType[0].name"
        >
          discount type
        </InputComponent>
        <InputComponent
          :id="'tax-input'"
          :icon="'dollar-sign'"
          :input-tag="Input.SELECT"
          :option="taxType"
          :value="taxType.length == 0 ? 'loading' : taxType[0].name"
        >
          tax class
        </InputComponent>
        <InputComponent
          :value="
            discountsType.length == 0 ? 'loading' : discountsType[0].value
          "
        >
          discount percentage (%)
        </InputComponent>
        <InputComponent
          :value="taxType.length == 0 ? 'loading' : taxType[0].value"
        >
          VAT amount (%)
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
import { Input } from "@/enums";
import { usePriceStore } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const { discountsType, taxType } = storeToRefs(usePriceStore());
const { getData } = usePriceStore();

onMounted(async () => {
  await getData();
});
</script>
<style scoped lang="scss"></style>
