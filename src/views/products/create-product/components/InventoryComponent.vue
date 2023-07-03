<template>
  <PaddingComponent>
    <template #title>inventory</template>
    <template #content>
      <div :class="`grid grid-cols-3 ${GAP_IN_COMPONENT}`">
        <InputComponent
          @type="(value) => (SKU = value)"
          :value="SKU"
          :placeholder="'type SKY product here'"
          :validate="VALIDATION.MIN_3"
        >
          SKU
        </InputComponent>
        <InputComponent
          @type="(value) => (barcode = value)"
          :value="barcode"
          :placeholder="'barcode product'"
          :validate="VALIDATION.MIN_3"
        >
          barcode
        </InputComponent>
        <InputComponent
          :value="`${quantity}`"
          @type="(value) => setQuantity(value)"
          :placeholder="'type quantity product here'"
          :validate="VALIDATION.NUMBER"
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
import { VALIDATION } from "@/constants";
const { SKU, barcode, quantity } = storeToRefs(useInventoryStore());
const { setQuantity } = useInventoryStore();
</script>
<style scoped lang="scss"></style>
