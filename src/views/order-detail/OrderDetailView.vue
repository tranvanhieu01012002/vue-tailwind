<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent>
        <select class="w-full bg-white h-full">
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
      </ButtonComponent>
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'download']" />
        <span>Export</span>
      </ButtonComponent>
      <ButtonComponent :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'file-invoice']" />
        <span class="">invoice</span>
      </ButtonComponent>
    </div>
  </div>
  <div :class="`second-row grid-cols-3 grid ${GAP_OUT_COMPONENT}`">
    <CardInfo :content="'added'" :value="'12 Dec 2022'" />
    <CardInfo :content="'added'" :value="'12 Dec 2022'" />
    <CardInfo :content="'added'" :value="'12 Dec 2022'" />
  </div>
  <div :class="`third-row grid grid-cols-3 ${GAP_OUT_COMPONENT} grid-flow-col`">
    <PaddingComponent class="col-span-2">
      <template #title>order list</template>
      <template #content>
        <DefaultTable :headers="header" :data="data" :grid="6"
      /></template>
    </PaddingComponent>
    <div :class="`grid grid-rows-2 ${GAP_OUT_COMPONENT}`">
      <CardInfo
        :type="'shipping'"
        content="1833 Bel Meadow Drive, Fontana, California 92335, USA"
      />
      <OrderStatus />
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  BreadcrumbDefault,
  ButtonComponent,
  PaddingComponent,
  DefaultTable,
} from "@/components";
import CardInfo from "./second-row/CardInfo.vue";
import OrderStatus from "./third-row/OrderStatus.vue";
import { header } from "./headerData";
import { data } from "./data";
import { GAP_OUT_COMPONENT } from "@/constants";
</script>
<style scoped lang="scss"></style>
