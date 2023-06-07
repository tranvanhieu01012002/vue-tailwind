<template>
  <PaddingComponent>
    <template #right>
      <div class="btn-group">
        <FilterButton />
      </div>
    </template>
    <template #content>
      <DefaultTable :grid="9" :headers="headerData" :data="data" />
    </template>
    <template #footer>
      <FooterTable />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import {
  PaddingComponent,
  DefaultTable,
  FooterTable,
  headerData,
} from "@/components";
import { data } from "./rows";
</script>
<style scoped lang="scss"></style>
