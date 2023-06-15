<template>
  <PaddingComponent>
    <template #title>inventory</template>
    <template #content>
      <div :class="`grid grid-cols-3 ${GAP_IN_COMPONENT}`">
        <InputComponent
          @type="(value) => (SKU = value)"
          :value="SKU"
          :placeholder="'type SKY product here'"
        >
          SKU
        </InputComponent>
        <InputComponent
          @type="(value) => (barcode = value)"
          :value="barcode"
          :placeholder="'barcode product'"
        >
          barcode
        </InputComponent>
        <InputComponent
          :value="`${quantity}`"
          @type="(value) => setQuantity(value)"
          :placeholder="'type quantity product here'"
        >
          quantity
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
import { useInventoryStore } from "@/stores";
import { storeToRefs } from "pinia";
const { SKU, barcode, quantity } = storeToRefs(useInventoryStore());
const { setQuantity } = useInventoryStore();
</script>
<style scoped lang="scss"></style>
