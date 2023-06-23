<template>
  <div class="">
    <PaddingComponent>
      <template #title>status</template>
      <template #right>
        <SpanStatusComponent :bg="SpanStatus.DRAFT">
          {{ status[currentStatusId].name }}
        </SpanStatusComponent>
      </template>
      <template #content>
        <div :class="`grid grid-flow-row auto-rows-max ${GAP_IN_COMPONENT}`">
          <InputComponent
            :id="'status-input'"
            :input-tag="Input.SELECT"
            :option="status"
            @selected="(value) => (currentStatusId = value)"
            :value="status[currentStatusId].name"
          >
            select status
          </InputComponent>
        </div>
      </template>
    </PaddingComponent>
  </div>
</template>
<script setup lang="ts">
import {
  PaddingComponent,
  InputComponent,
  SpanStatusComponent,
} from "@/components";
import { GAP_IN_COMPONENT, PRODUCTS_STATUS } from "@/constants";
import { Input, SpanStatus } from "@/enums";
import { SelectType } from "@/types";
import { ref } from "vue";
const status = ref<SelectType[]>(
  Object.values(PRODUCTS_STATUS).map((item: string, index) => ({
    id: index,
    name: item,
    value: item,
    description: "",
  }))
);
const currentStatusId = ref(0);
</script>
<style scoped lang="scss"></style>
