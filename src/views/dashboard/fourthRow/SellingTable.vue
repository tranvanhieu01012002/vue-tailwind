<template>
  <PaddingComponent>
    <template #title>Top selling product</template>
    <template #right><FilterButton /></template>
    <template #content>
      <DefaultTable :headers="header" :data="data" :grid="12" />
    </template>
    <template #footer>
      <FooterTable />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import PaddingComponent from "../components/PaddingComponent.vue";
import FooterTable from "@/components/FooterTable.vue";
import FilterButton from "@/components/button/FilterButton.vue";
import DefaultTable from "@/components/table/DefaultTable.vue";
import { header } from "./header";
import { data } from "./row";
</script>
<style scoped lang="scss">
thead {
  text-transform: capitalize;
}
table {
  text-align: center;

  border-collapse: collapse;

  margin: auto;

  font-size: 20px;
}
</style>
