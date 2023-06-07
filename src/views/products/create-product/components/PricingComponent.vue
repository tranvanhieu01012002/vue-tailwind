<template>
  <PaddingComponent>
    <template #title>pricing</template>
    <template #content>
      <div
        :class="`grid grid-rows-3 ${GAP_IN_COMPONENT} grid-flow-col text-gray-400`"
      >
        <InputComponent
          class="col-span-2"
          :icon="'dollar-sign'"
          :placeholder="'type base price here'"
        >
          basic price
        </InputComponent>
        <InputComponent :input-tag="Input.SELECT" :option="dataOption">
          discount type
        </InputComponent>
        <InputComponent
          :icon="'dollar-sign'"
          :input-tag="Input.SELECT"
          :option="dataOption"
        >
          tax class
        </InputComponent>
        <InputComponent> discount percentage (%) </InputComponent>
        <InputComponent> VAT amount (%) </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
import { Option } from "@/types";
import { Input } from "@/enums";
const dataOption: Option[] = [
  { name: "data1", value: "data1" },
  { name: "data2", value: "data2" },
  { name: "data3", value: "data3" },
];
</script>
<style scoped lang="scss"></style>
