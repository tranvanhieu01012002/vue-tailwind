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
            @selected="(value) => $emit('updateId', value)"
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
import { GAP_IN_COMPONENT } from "@/constants";
import { Input, SpanStatus } from "@/enums";
import { SelectType } from "@/types";
import { PropType, defineProps, defineEmits } from "vue";

defineProps({
  status: {
    type: Object as PropType<SelectType[]>,
    required: true,
  },
  currentStatusId: {
    type: Number,
    required: false,
    default: 0,
  },
});
defineEmits(["updateId"]);
</script>
<style scoped lang="scss"></style>
