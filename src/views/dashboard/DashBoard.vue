<template>
  <!--Start First row -->
  <div class="flex justify-between">
    <TimeBar />
    <div class="btn-group flex">
      <ButtonComponent :style="'btn-white'"
        ><div class="flex justify-center">
          <svg
            class="h-5 w-5 text-gray-400 mr-1 mt-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          buy now
        </div></ButtonComponent
      >
      <ButtonComponent :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">add product</span>
      </ButtonComponent>
    </div>
  </div>
  <!--End First row -->
  <!-- Start Second row -->
  <div
    :class="`list-sale grid xl:grid-cols-4 md:grid-cols-2 ${GAP_OUT_COMPONENT}`"
  >
    <SaleInfo
      v-for="(saleIcon, index) in listSaleIcon"
      :key="index"
      :icon-style="saleIcon"
      :sale-info="listSaleInfo[index]"
    />
  </div>
  <!-- End Second row -->
  <!-- Start Third row -->
  <div :class="`grid grid-cols-12 ${GAP_OUT_COMPONENT}`">
    <SaleProgress class="col-span-4" />
    <AnalysisChart class="col-span-8" />
  </div>
  <!-- End Third row -->
  <!-- Start Fourth row -->
  <div :class="`grid grid-cols-12 ${GAP_OUT_COMPONENT}`">
    <SellingTable class="col-span-8" />
    <SaleByLocation class="col-span-4" />
  </div>

  <div class="w-full">
    <RecentOrderTable />
  </div>
  <!-- End Fourth row -->
</template>
<script setup lang="ts">
import { CircleIcon, SaleInfo as SaleInfoType } from "@/types";
import { GAP_OUT_COMPONENT } from "@/constants";
import { TimeBar, ButtonComponent } from "@/components";
import SaleInfo from "./secondRow/SaleInfo.vue";
import SaleProgress from "./thirdRow/SaleProgress.vue";
import AnalysisChart from "./thirdRow/AnalysisChart.vue";
import SellingTable from "./fourthRow/SellingTable.vue";
import SaleByLocation from "./fourthRow/SaleByLocation.vue";
import RecentOrderTable from "./fifthRow/RecentOrderTable.vue";
const listSaleIcon: Array<CircleIcon> = [
  {
    icon: ["fas", "money-bill"],
    borderInside: "bg-violet-400",
    borderOutside: "bg-violet-200",
    color: "text-primary",
  },
  {
    icon: ["fas", "cart-shopping"],
    borderInside: "bg-green-400",
    borderOutside: "bg-green-200",
    color: "text-green-600",
  },
  {
    icon: ["fas", "wallet"],
    borderInside: "bg-red-400",
    borderOutside: "bg-red-200",
    color: "text-red-800",
  },
  {
    icon: ["fas", "barcode"],
    borderInside: "bg-orange-400",
    borderOutside: "bg-orange-200",
    color: "text-orange-800",
  },
];

const listSaleInfo: Array<SaleInfoType> = [
  {
    text: "Total Revenue",
    price: 5435453,
    unit: "$",
    percent: 10,
  },
  {
    text: "Total sales",
    price: 45000,
    percent: 12,
  },
  {
    text: "Product SKU",
    price: 3234,
    percent: 0,
  },
  {
    text: "Balance",
    price: 1002,
    percent: -25,
    unit: "$",
  },
];
</script>
