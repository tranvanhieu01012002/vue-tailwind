<template>
  <PaddingComponent>
    <template #title>shipping</template>
    <template #content>
      <button @click="toggleShipping" class="physical-product flex mb-5">
        <div class="pt-1">
          <input
            :checked="isPhysical"
            type="checkbox"
            class="w-5 pt-2 h-5 mr-3"
          />
        </div>
        <div>
          <span>This is physical product</span>
        </div>
      </button>
      <div v-if="isPhysical" :class="`grid-cols-4 grid ${GAP_IN_COMPONENT}`">
        <InputComponent
          v-for="(value, key) in shippingInfo"
          :key="key"
          :value="`${value}`"
          @type="(inputValue) => update(shippingInfo, key, inputValue)"
        >
          {{ key }}
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
import { useShippingStore } from "@/stores/shippingStore";
import { storeToRefs } from "pinia";
import { ShippingType } from "@/types";

const { isPhysical, shippingInfo } = storeToRefs(useShippingStore());
const { toggleShipping, updateShippingInfo } = useShippingStore();

// dynamic access property here
const update = (
  preShipping: ShippingType,
  key: keyof ShippingType,
  value: string
) => {
  preShipping[key] = +value;
  updateShippingInfo(preShipping);
};
</script>
<style scoped lang="scss"></style>
