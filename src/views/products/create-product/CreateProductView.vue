<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'xmark']" />
        <span>cancel</span>
      </ButtonComponent>
      <ButtonComponent :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">add product</span>
      </ButtonComponent>
    </div>
  </div>
  <div class="second-row">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-9">
        <div class="grid grid-flow-row auto-rows-max gap-8">
          <GeneralInformation />
          <MediaComponent />
          <PricingComponent />
        </div>
      </div>
      <div class="col-span-3">
        <div class="grid grid-flow-row auto-rows-max gap-8">
          <CategoryComponent />
          <StatusComponent />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ButtonComponent, BreadcrumbDefault } from "@/components";
import {
  GeneralInformation,
  MediaComponent,
  StatusComponent,
  CategoryComponent,
  PricingComponent,
} from "./components";
</script>
<style scoped lang="scss"></style>
