<template>
  <PaddingComponent>
    <template #title>order #43433</template>
    <template #center>
      <SpanStatusComponent> process </SpanStatusComponent>
    </template>
    <template #content>
      <div class="info flex justify-between mb-5 last:mb-0">
        <div class="left flex">
          <CircleIcon :icon-style="icon" />
          <div class="pl-3">
            <span v-if="type" class="text-gray-400">{{ type }}</span>
            <div :class="[type != '' ? '' : 'pt-3']">
              {{ content }}
            </div>
          </div>
        </div>
        <div v-if="value != ''" class="right">
          {{ value }}
        </div>
      </div>
      <div class="info flex justify-between mb-5 last:mb-0">
        <div class="left flex">
          <CircleIcon :icon-style="icon" />
          <span class="mt-3 pl-3">hello</span>
        </div>
        <div class="right">ok</div>
      </div>
      <div class="info flex justify-between mb-5 last:mb-0">
        <div class="left flex">
          <CircleIcon :icon-style="icon" />
          <span class="mt-3 pl-3">hello</span>
        </div>
        <div class="right">ok</div>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import {
  PaddingComponent,
  SpanStatusComponent,
  CircleIcon,
} from "@/components";
import { CircleIcon as CircleIconType } from "@/types";
import { defineProps } from "vue";
defineProps({
  type: {
    type: String,
    required: false,
    default: "",
  },
  content: {
    type: String,
    required: true,
    default: "Shipping",
  },
  value: {
    type: String,
    required: false,
    default: "",
  },
});
const icon: CircleIconType = {
  icon: ["fas", "money-bill"],
  borderInside: "bg-gray-400",
  borderOutside: "bg-gray-200",
  color: "text-gray-800",
};
</script>
<style scoped lang="scss"></style>
