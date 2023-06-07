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
        <span class="">add order</span>
      </ButtonComponent>
    </div>
  </div>
  <div class="second-row flex justify-between">
    <TimeBar />
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
  <div class="third-row">
    <RecentOrderTable />
  </div>
</template>
<script setup lang="ts">
import {
  BreadcrumbDefault,
  ButtonComponent,
  TimeBar,
  FilterButton,
} from "@/components";
import RecentOrderTable from "../dashboard/fifthRow/RecentOrderTable.vue";
</script>
<style scoped lang="scss"></style>
