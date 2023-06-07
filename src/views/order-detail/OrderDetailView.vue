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
    <CardInfo />
    <CardInfo />
    <CardInfo />
  </div>
</template>
<script setup lang="ts">
import { BreadcrumbDefault, ButtonComponent } from "@/components";
import CardInfo from "./second-row/CardInfo.vue";
import { GAP_OUT_COMPONENT } from "@/constants";
</script>
<style scoped lang="scss"></style>
