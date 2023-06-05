<template>
  <span :class="showSss" class="rounded-3xl px-3 py-1 mr-3 mt-2 capitalize">
    <slot></slot>
  </span>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";
import { SpanStatus } from "@/enums";
const props = defineProps({
  bg: { type: String, required: false, default: SpanStatus.SUCCESS },
});

const showSss = computed((): string => {
  return `bg-${props.bg}-${SpanStatus.BG} text-${props.bg}-${SpanStatus.TEXT}`;
});
</script>
<style scoped lang="scss"></style>
