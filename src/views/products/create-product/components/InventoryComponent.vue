<template>
  <PaddingComponent>
    <template #title>inventory</template>
    <template #content>
      <div :class="`grid grid-cols-3 ${GAP_IN_COMPONENT}`">
        <InputComponent :placeholder="'type SKY product here'">
          SKU
        </InputComponent>
        <InputComponent :placeholder="'barcode product'">
          barcode
        </InputComponent>
        <InputComponent :placeholder="'type quantity product here'">
          quantity
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
</script>
<style scoped lang="scss"></style>
