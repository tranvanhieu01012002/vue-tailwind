<template>
  <PaddingComponent>
    <template #title>pricing</template>
    <template #content>
      <div :class="`grid grid-rows-3 ${GAP_IN_COMPONENT} grid-flow-col`">
        <InputComponent
          class="col-span-2"
          :icon="'dollar-sign'"
          :placeholder="'type base price here'"
          :value="`${price}`"
          @type="(value) => setPrice(+value)"
          :validate="VALIDATION.NUMBER"
        >
          basic price
        </InputComponent>
        <InputComponent
          :id="'discount-input'"
          :input-tag="Input.SELECT"
          :option="discountsType"
          :value="getValue(discountsType, currentDiscountId, 'name')"
          @selected="(value) => setCurrentDiscountId(value)"
        >
          discount type
        </InputComponent>
        <InputComponent
          :id="'tax-input'"
          :icon="'dollar-sign'"
          :input-tag="Input.SELECT"
          :option="taxType"
          :value="getValue(taxType, currentTaxId, 'name')"
          @selected="(value) => setCurrentTaxId(value)"
        >
          tax class
        </InputComponent>
        <InputComponent
          :value="getValue(discountsType, currentDiscountId, 'value')"
          @type="(value) => setValueDiscount(currentDiscountId, value)"
          :validate="VALIDATION.REQUIRED"
        >
          discount percentage (%)
        </InputComponent>
        <InputComponent
          :value="getValue(taxType, currentTaxId, 'value')"
          @type="(value) => setValueTax(currentTaxId, value)"
          :validate="VALIDATION.REQUIRED"
        >
          VAT amount (%)
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
import { Input } from "@/enums";
import { usePriceStore } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { SelectType } from "@/types";
import { VALIDATION } from "@/constants";
const { discountsType, taxType, price, currentDiscountId, currentTaxId } =
  storeToRefs(usePriceStore());

const {
  getData,
  setPrice,
  setCurrentDiscountId,
  setCurrentTaxId,
  setValueDiscount,
  setValueTax,
} = usePriceStore();

const getValue = (
  list: SelectType[],
  index: number,
  property: keyof SelectType
) => {
  return list.length === 0 ? "loading" : `${list[index][property]}`;
};

onMounted(async () => {
  await getData();
});
</script>
<style scoped lang="scss"></style>
