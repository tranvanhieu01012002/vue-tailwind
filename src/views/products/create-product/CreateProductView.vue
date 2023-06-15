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
    <div :class="`grid grid-cols-11 ${GAP_OUT_COMPONENT}`">
      <div class="col-span-8">
        <div :class="`grid grid-flow-row auto-rows-max ${GAP_OUT_COMPONENT}`">
          <GeneralInformation>
            <template #type>product</template>
          </GeneralInformation>
          <MediaComponent />
          <PricingComponent />
          <InventoryComponent />
          <VariationComponent />
          <ShippingComponent />
        </div>
      </div>
      <div class="col-span-3">
        <div :class="`grid grid-flow-row auto-rows-max ${GAP_OUT_COMPONENT}`">
          <CategoryComponent />
          <StatusComponent />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ButtonComponent, BreadcrumbDefault } from "@/components";
import { GAP_OUT_COMPONENT } from "@/constants";
import {
  GeneralInformation,
  MediaComponent,
  StatusComponent,
  CategoryComponent,
  PricingComponent,
  InventoryComponent,
  VariationComponent,
  ShippingComponent,
} from "./components";
import { useGeneralInformationStore } from "@/stores";
import { storeToRefs } from "pinia";
const { name, description } = storeToRefs(useGeneralInformationStore());
</script>
<style scoped lang="scss"></style>
