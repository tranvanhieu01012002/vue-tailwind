<template>
  <PaddingComponent>
    <template #title>recent order</template>
    <template #right>
      <div class="btn-group">
        <FilterButton />
        <ButtonComponent :style="'btn-primary'"> see more </ButtonComponent>
      </div>
    </template>
    <template #content>
      <DefaultTable :headers="header" :data="data" :grid="9" />
    </template>
    <template #footer>
      <FooterTable />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import {
  PaddingComponent,
  FilterButton,
  FooterTable,
  ButtonComponent,
  DefaultTable,
} from "@/components";
import { header } from "./headerData";
import { data } from "./rows";
</script>
<style scoped lang="scss"></style>
