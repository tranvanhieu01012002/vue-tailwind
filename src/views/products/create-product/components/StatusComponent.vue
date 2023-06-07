<template>
  <div class="">
    <PaddingComponent>
      <template #title>status</template>
      <template #right
        ><SpanStatusComponent>Draft</SpanStatusComponent></template
      >
      <template #content>
        <div :class="`grid grid-flow-row auto-rows-max ${GAP_IN_COMPONENT}`">
          <InputComponent :input-tag="Input.SELECT" :option="dataOption"
            >select category</InputComponent
          >
        </div>
      </template>
    </PaddingComponent>
  </div>
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
