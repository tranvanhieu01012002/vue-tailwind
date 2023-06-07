<template>
  <PaddingComponent>
    <template #title>Top selling product</template>
    <template #right><FilterButton /></template>
    <template #content>
      <DefaultTable :headers="header" :data="data" :grid="6" />
    </template>
    <template #footer>
      <FooterTable />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import {
  PaddingComponent,
  FooterTable,
  FilterButton,
  DefaultTable,
} from "@/components";
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
