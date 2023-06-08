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
      <DefaultTable
        :headers="header"
        :data="data"
        :grid="9"
        @click-icon="(indexIcon, indexItem) => clickBtn(indexIcon, indexItem)"
      />
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
import { useRouter } from "vue-router";

const router = useRouter();

const clickBtn = (icon: number, item: number) => {
  switch (icon) {
    case 0:
      openDetailOrder(item);
      break;
    default:
      break;
  }
};

const openDetailOrder = (indexItem: number) => {
  router.push({ name: "order-detail", params: { id: indexItem } });
};
</script>
<style scoped lang="scss"></style>
