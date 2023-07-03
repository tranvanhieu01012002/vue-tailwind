<template>
  <div class="flex justify-between">
    <div class="left">
      <div class="product mt-2">
        <span class="capitalize mr-3">product completion</span>
        <SpanStatusComponent>{{ `${percent} %` }}</SpanStatusComponent>
      </div>
    </div>
    <div class="right">
      <ButtonComponent> X cancel </ButtonComponent>
      <ButtonComponent v-if="error" :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">add product</span>
      </ButtonComponent>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, onUnmounted } from "vue";
import { SpanStatusComponent, ButtonComponent } from ".";
import { useEventBusValidate } from "@/hooks";
const { error, startEventBus, stopEventBus } = useEventBusValidate();
defineProps({
  percent: {
    type: Number,
    required: false,
    default: 0,
  },
});

onMounted(() => {
  startEventBus();
});
onUnmounted(() => {
  stopEventBus();
});
</script>
<style scoped lang="scss"></style>
