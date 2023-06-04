<template>
  <div class="products grid grid-flow-row auto-rows-max gap-y-8">
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
  </div>
</template>
<script setup lang="ts">
import SearchDefault from "@/components/search/SearchDefault.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import FilterButton from "@/components/button/FilterButton.vue";
import FullProductTable from "./thirdRow/FullProductTable.vue";
</script>
<style scoped lang="scss"></style>
