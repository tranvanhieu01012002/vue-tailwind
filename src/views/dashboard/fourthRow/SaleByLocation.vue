<template>
  <PaddingComponent>
    <template #title>Sale by Location</template>
    <template #description>Sales performance by location</template>
    <template #right>
      <font-awesome-icon class="text-3xl" :icon="['fas', 'ellipsis-vertical']"
    /></template>
    <template #content>
      <SaleByLocationRow />
      <SaleByLocationRow />
      <SaleByLocationRow />
      <SaleByLocationRow />
      <SaleByLocationRow />
      <SaleByLocationRow />
      <SaleByLocationRow />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent } from "@/components";
import SaleByLocationRow from "./components/SaleByLocationRow.vue";
</script>
<style scoped lang="scss"></style>
