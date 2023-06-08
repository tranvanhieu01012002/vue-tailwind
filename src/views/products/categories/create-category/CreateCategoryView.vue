<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'download']" />
        <span>cancel</span>
      </ButtonComponent>
      <ButtonComponent :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">save category</span>
      </ButtonComponent>
    </div>
  </div>
  <div :class="`second-row grid grid-cols-11 ${GAP_OUT_COMPONENT}`">
    <div class="col-span-3">
      <PaddingComponent>
        <template #content>
          <InputMediaComponent>Thumbnail</InputMediaComponent>
        </template>
      </PaddingComponent>
    </div>
    <div class="col-span-8">
      <GeneralInformation />
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  BreadcrumbDefault,
  ButtonComponent,
  InputMediaComponent,
  PaddingComponent,
} from "@/components";
import GeneralInformation from "../../create-product/components/GeneralInformation.vue";
import { GAP_OUT_COMPONENT } from "@/constants";
</script>
<style scoped lang="scss"></style>
