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
import PaddingComponent from "@/views/dashboard/components/PaddingComponent.vue";
import DefaultTable from "@/components/table/DefaultTable.vue";
import FooterTable from "@/components/FooterTable.vue";
import { headerData } from "@/components/table/headerData";
import { data } from "./rows";
</script>
<style scoped lang="scss"></style>
