<template>
  <div class="dashboard bg-o">
    <FirstRow />
    <div class="list-sale columns-4 gap-8 py-5">
      <SaleInfo
        v-for="(saleIcon, index) in listSaleIcon"
        :key="index"
        :icon-style="saleIcon"
        :sale-info="listSaleInfo[index]"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { SaleIcon, SaleInfo as SaleInfoType } from "@/types";
import FirstRow from "../dashboard/firstRow/FirstRow.vue";
import SaleInfo from "./SaleInfo.vue";
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
