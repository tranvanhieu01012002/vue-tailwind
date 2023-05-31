<template>
  <div class="dashboard">
    <FirstRow />
    <div class="list-sale columns-4 gap-8">
      <SaleInfo />
      <SaleInfo />
      <SaleInfo />
      <SaleInfo />
    </div>
  </div>
</template>
<script setup lang="ts">
import FirstRow from "../dashboard/firstRow/FirstRow.vue";
import SaleInfo from "./SaleInfo.vue";
</script>
