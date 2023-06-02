<template>
  <span :class="bg" class="rounded-3xl px-3 py-1 mx-3 mt-2">
    <slot></slot>
  </span>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { SpanStatus } from "@/enums";
defineProps({
  bg: { type: String, required: false, default: SpanStatus.SUCCESS },
});
</script>
<style scoped lang="scss"></style>
