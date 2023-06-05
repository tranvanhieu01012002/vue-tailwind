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
      <div class="pt-5">
        <DefaultTable :headers="header" :data="data" :grid="9" />
      </div>
    </template>
    <template #footer>
      <FooterTable />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import PaddingComponent from "../components/PaddingComponent.vue";
import FilterButton from "../../../components/button/FilterButton.vue";
import FooterTable from "@/components/FooterTable.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import DefaultTable from "@/components/table/DefaultTable.vue";
import { header } from "./headerData";
import { data } from "./rows";
</script>
<style scoped lang="scss"></style>
