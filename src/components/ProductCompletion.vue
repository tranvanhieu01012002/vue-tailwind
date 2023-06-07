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
      <ButtonComponent :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">add product</span>
      </ButtonComponent>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { SpanStatusComponent, ButtonComponent } from ".";
defineProps({
  percent: {
    type: Number,
    required: false,
    default: 0,
  },
});
</script>
<style scoped lang="scss"></style>
