<template>
  <PaddingComponent>
    <template #right>
      <div class="btn-group">
        <FilterButton />
      </div>
    </template>
    <template #content>
      <DefaultTable :grid="9" :headers="headerData" :data="products.data" />
    </template>
    <template #footer>
      <FooterTable />
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
import { DEFAULT_PAGE } from "@/helpers";
const products = ref({
  isLoaded: false,
  data: [],
});
const links = ref<Link[]>([]);
onMounted(async () => {
  await getProducts();
});
const getProducts = async (page = DEFAULT_PAGE) => {
  const { data } = await authApi.get(`products?page=${page}`);
  products.value.data = data.data.data.map((item: any) => {
    delete item.barcode;
    delete item.discount;
    delete item.tax_fee;
    return createArrFromObj(item);
  });
  links.value = data.data.links;
};

const createArrFromObj = (obj: any) => {
  const arr = [];
  Object.values(obj).map((item: any, index) => {
    if (index > 1 && item != null && item.length != 0) {
      arr.push(
        index === 2
          ? {
              image: obj.media[0]
                ? obj.media[0].path
                : "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/14%20prm.jpeg",
              name: obj.name,
              info: item,
              slot: "product",
              span: 2,
            }
          : { content: item ?? "unknown" }
      );
    }
  });
  arr.push({
    action: [
      ["fas", "eye"],
      ["fas", "pencil"],
      ["fas", "trash"],
    ],
    span: 1,
  });
  return arr;
};
</script>
<style scoped lang="scss"></style>
