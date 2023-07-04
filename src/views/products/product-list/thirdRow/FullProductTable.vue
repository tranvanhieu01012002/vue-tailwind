<template>
  <PaddingComponent>
    <template #right>
      <div class="btn-group">
        <FilterButton />
      </div>
    </template>
    <template #content>
      <DefaultTable :grid="9" :headers="headerData" :data="products" />
    </template>
    <template #footer>
      <FooterTable @click="(url) => movePage(url)" :links="links" />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { authApi } from "@/api";
import {
  PaddingComponent,
  DefaultTable,
  FooterTable,
  headerData,
} from "@/components";
import { Link } from "@/types";
import { onMounted, ref } from "vue";
const products = ref([]);
const links = ref<Link[]>([]);
onMounted(async () => {
  await handleData();
});
const handleData = async (page = "") => {
  const { data } = await authApi.get(`products?${page}`);
  products.value = data.data;
  links.value = data.data.links;
};

const movePage = async (url: string) => {
  await handleData(url.split("?")[1]);
};
</script>
<style scoped lang="scss"></style>
