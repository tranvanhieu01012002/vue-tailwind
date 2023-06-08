<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'download']" />
        <span>Export</span>
      </ButtonComponent>
      <ButtonComponent :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">add category</span>
      </ButtonComponent>
    </div>
  </div>
  <div :class="`second-row grid grid-cols-11 ${GAP_OUT_COMPONENT}`">
    <div class="col-span-4">
      <CustomerInfo :type="'USER_ID: 43432'" />
    </div>
    <div class="col-span-7">
      <div :class="`grid grid-flow-row ${GAP_OUT_COMPONENT}`">
        <div :class="`grid grid-cols-3 ${GAP_OUT_COMPONENT}`">
          <SaleInfo
            v-for="(saleIcon, index) in listSaleIcon"
            :key="index"
            :icon-style="saleIcon"
            :sale-info="listSaleInfo[index]"
          />
        </div>
        <div class="table">
          <PaddingComponent>
            <template #title>transaction history</template>
            <template #right>
              <div class="btn-group">
                <FilterButton />
                <ButtonComponent :style="'btn-primary'">
                  see more
                </ButtonComponent>
              </div>
            </template>
            <template #content>
              <DefaultTable :data="data" :headers="header" :grid="6" />
            </template>
            <template #footer><FooterTable /></template>
          </PaddingComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  BreadcrumbDefault,
  ButtonComponent,
  PaddingComponent,
  FilterButton,
  FooterTable,
  DefaultTable,
} from "@/components";
import CustomerInfo from "./second-row/CustomerInfo.vue";
import { GAP_OUT_COMPONENT } from "@/constants";
import SaleInfo from "@/views/dashboard/secondRow/SaleInfo.vue";
import {
  CircleIcon as CircleIconType,
  SaleInfo as SaleInfoType,
} from "@/types";
import { header } from "./header";
import { data } from "./data";
const listSaleIcon: Array<CircleIconType> = [
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
    text: "Balance",
    price: 1002,
    percent: -25,
    unit: "$",
  },
];
</script>
<style scoped lang="scss"></style>
