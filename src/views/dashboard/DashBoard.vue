<template>
  <div class="dashboard grid grid-flow-row auto-rows-max gap-y-8">
    <!--Start First row -->
    <div class="flex justify-between">
      <TimeBar />
      <ButtonGroup />
    </div>
    <!--End First row -->
    <!-- Start Second row -->
    <div class="list-sale grid xl:grid-cols-4 md:grid-cols-2 gap-8">
      <SaleInfo
        v-for="(saleIcon, index) in listSaleIcon"
        :key="index"
        :icon-style="saleIcon"
        :sale-info="listSaleInfo[index]"
      />
    </div>
    <!-- End Second row -->
    <!-- Start Third row -->
    <div class="grid grid-cols-12 gap-8">
      <SaleProgress class="col-span-4" />
      <AnalysisChart class="col-span-8" />
    </div>
    <!-- End Third row -->
    <!-- Start Fourth row -->
    <div class="grid grid-cols-12 gap-8">
      <SellingTable class="col-span-8" />
      <SaleByLocation class="col-span-4" />
    </div>
    <!-- End Fourth row -->
  </div>
</template>
<script setup lang="ts">
import { SaleIcon, SaleInfo as SaleInfoType } from "@/types";
import ButtonGroup from "./firstRow/ButtonGroup.vue";
import TimeBar from "./firstRow/TimeBar.vue";
import SaleInfo from "./secondRow/SaleInfo.vue";
import SaleProgress from "./thirdRow/SaleProgress.vue";
import AnalysisChart from "./thirdRow/AnalysisChart.vue";
import SellingTable from "./fourthRow/SellingTable.vue";
import SaleByLocation from "./fourthRow/SaleByLocation.vue";
const listSaleIcon: Array<SaleIcon> = [
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
