<template>
  <PaddingComponent>
    <template #title>Top selling product</template>
    <template #right><FilterButton /></template>
    <template #content>
      <!-- <DefaultTable :headers="header" :data="data" :grid="6" /> -->
      <TyniMce :content="editorData" @input="input" />
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
import TyniMce from "../components/TyniMce.vue";
import { ref } from "vue";
const editorData = ref("<p>Content of the editor.</p>");
const input = (value: string) => {
  console.log("shiw data", value);
  editorData.value = value;
};
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
