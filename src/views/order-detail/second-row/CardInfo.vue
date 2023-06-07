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
const icon: CircleIconType = {
  icon: ["fas", "money-bill"],
  borderInside: "bg-violet-400",
  borderOutside: "bg-violet-200",
  color: "text-primary",
};
</script>
<style scoped lang="scss"></style>
