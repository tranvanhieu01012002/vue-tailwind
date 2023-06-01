<template>
  <div class="w-full bg-white rounded-md shadow-lg shadow-gray-400 p-5">
    <div
      :class="iconStyle.borderOutside"
      class="sale-info__icon w-12 h-12 rounded-full flex justify-center items-center"
    >
      <div
        :class="iconStyle.borderInside"
        class="w-9 h-9 rounded-full flex justify-center items-center"
      >
        <font-awesome-icon
          class="w-6 h-6"
          :class="iconStyle.color"
          :icon="iconStyle.icon"
        />
      </div>
    </div>
    <div class="sale-info__text my-4">{{ saleInfo.text }}</div>
    <div class="sale-info__price flex">
      <div class="text-3xl font-semibold">
        {{ `${saleInfo.unit ?? ""}${numeral(saleInfo.price).format("0.00a")}` }}
      </div>
      <div
        :class="showCssPercent"
        class="sale-info__price__percent rounded-3xl h-6 px-2 mx-3 mt-2"
      >
        {{
          `${saleInfo.percent > 0 ? `+${saleInfo.percent}` : saleInfo.percent}%`
        }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { SaleIcon } from "@/types";
import { SaleInfo } from "@/types";
import { PropType, computed, defineProps } from "vue";
import numeral from "numeral";
const props = defineProps({
  iconStyle: {
    type: Object as PropType<SaleIcon>,
    required: true,
  },
  saleInfo: {
    type: Object as PropType<SaleInfo>,
    required: true,
  },
});
const showCssPercent = computed((): string => {
  if (props.saleInfo.percent > 0) {
    return "bg-green-300";
  } else if (props.saleInfo.percent == 0) {
    return "bg-gray-300";
  } else {
    return "bg-red-200";
  }
});
</script>
<style lang="scss" scoped>
.sale-info__text {
  font-size: 20px;
  color: #667085;
}
</style>
