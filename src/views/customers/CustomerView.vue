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
  <div class="second-row">
    <div class="search flex justify-between">
      <SearchDefault />
      <div class="btn-group">
        <ButtonComponent
          ><font-awesome-icon
            class="mr-1"
            :icon="['fas', 'calendar-days']"
          />Select date</ButtonComponent
        >
        <FilterButton />
      </div>
    </div>
  </div>
  <div class="third-row">
    <PaddingComponent>
      <template #title>customers</template>
      <template #content>
        <DefaultTable
          @click-icon="(icon, item) => clickBtn(icon, item)"
          :headers="header"
          :data="data"
          :grid="8"
        />
      </template>
    </PaddingComponent>
  </div>
</template>
<script setup lang="ts">
import {
  BreadcrumbDefault,
  ButtonComponent,
  SearchDefault,
  FilterButton,
  PaddingComponent,
  DefaultTable,
} from "@/components";
import { header } from "./header";
import { data } from "./data";

import { useRouter } from "vue-router";

const router = useRouter();

const clickBtn = (icon: number, item: number) => {
  switch (icon) {
    case 0:
      openCustomerDetail(item);
      break;
    default:
      break;
  }
};

const openCustomerDetail = (indexItem: number) => {
  router.push({ name: "customer-detail", params: { id: indexItem } });
};
</script>
<style scoped lang="scss"></style>
