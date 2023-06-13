<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'download']" />
        <span>Export</span>
      </ButtonComponent>
      <ButtonComponent @click="click" :style="'btn-primary'">
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
      <template #content>
        <DefaultTable :headers="header" :grid="6" :data="data" />
      </template>
      <template #footer><FooterTable /></template>
    </PaddingComponent>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  BreadcrumbDefault,
  ButtonComponent,
  FilterButton,
  SearchDefault,
  DefaultTable,
  PaddingComponent,
  FooterTable,
} from "@/components";
import { header } from "./header";
import { data } from "./data";

const router = useRouter();

const click = () => {
  router.push({ name: "create-categories" });
};
</script>
<style scoped lang="scss"></style>
