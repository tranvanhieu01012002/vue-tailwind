<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'download']" />
        <span>Export</span>
      </ButtonComponent>
      <ButtonComponent @click="clickBtn" :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">Add product</span>
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
    <FullProductTable />
  </div>
</template>
<script setup lang="ts">
import SearchDefault from "@/components/search/SearchDefault.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import FilterButton from "@/components/button/FilterButton.vue";
import FullProductTable from "./thirdRow/FullProductTable.vue";
import BreadcrumbDefault from "@/components/breadcrumb/BreadcrumbDefault.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const clickBtn = () => {
  return router.push({ name: "create-product" });
};
</script>
<style scoped lang="scss"></style>
