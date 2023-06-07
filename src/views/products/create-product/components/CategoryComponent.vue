<template>
  <PaddingComponent>
    <template #title>Category</template>
    <template #content>
      <div class="grid grid-flow-row auto-rows-max gap-5">
        <InputComponent :input-tag="Input.SELECT" :option="dataOption">
          select category
        </InputComponent>
        <InputComponent :input-tag="Input.SELECT" :option="dataOption">
          product tags
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { Option } from "@/types";
import { Input } from "@/enums";
const dataOption: Option[] = [
  { name: "data1", value: "data1" },
  { name: "data2", value: "data2" },
  { name: "data3", value: "data3" },
];
</script>
<style scoped lang="scss"></style>
