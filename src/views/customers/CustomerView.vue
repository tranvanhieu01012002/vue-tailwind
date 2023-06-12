<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'download']" />
        <span>Export</span>
      </ButtonComponent>
      <ButtonComponent :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">add category</span>
      </ButtonComponent>
    </div>
  </div>
  <div class="second-row">
    <div class="search flex justify-between">
      <SearchDefault />
      <div class="btn-group">
        <ButtonComponent
          ><font-awesome-icon
            class="mr-1"
            :icon="['fas', 'calendar-days']"
          />Select date</ButtonComponent
        >
        <FilterButton />
      </div>
    </div>
  </div>
  <div class="third-row">
    <PaddingComponent>
      <template #title>customers</template>
      <template #content>
        <DefaultTable
          v-if="customers.isLoaded"
          @click-icon="(icon, item) => clickBtn(icon, item)"
          :headers="header"
          :data="customers.data"
          :grid="8"
        />
      </template>
      <template #footer
        ><FooterTable @click="(url) => clickBtn(1, url)" :links="links"
      /></template>
    </PaddingComponent>
  </div>
</template>
<script setup lang="ts">
import {
  BreadcrumbDefault,
  ButtonComponent,
  SearchDefault,
  FilterButton,
  PaddingComponent,
  DefaultTable,
  FooterTable,
} from "@/components";
import { header } from "./header";

import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { api } from "@/api";
import { Link } from "@/types";

const router = useRouter();
const customers = ref({
  isLoaded: false,
  data: [],
});
const links = ref<Link[]>([]);

const clickBtn = (icon: number, item: string) => {
  switch (icon) {
    case 0:
      openCustomerDetail(item);
      break;
    case 1:
      movePage(item);
      break;
    default:
      break;
  }
};

onMounted(async () => {
  await handleData();
});

const handleData = async (queryString = "") => {
  const { data } = await api.get(`users?${queryString}`);
  customers.value.data = data.data.data.map((item: any) => {
    delete item.rank;
    return createArrFromObj(item);
  });
  links.value = data.data.links;
  customers.value.isLoaded = true;
};

const openCustomerDetail = (indexItem: string) => {
  router.push({ name: "customer-detail", params: { id: indexItem } });
};

const movePage = async (url: string) => {
  await handleData(url.split("?")[1]);
};

const createArrFromObj = (obj: any) => {
  const arr = [];
  Object.values(obj).map((item, index) => {
    if (index > 1) {
      arr.push(
        index === 2
          ? {
              image:
                "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/14%20prm.jpeg",
              name: Object.values(obj)[index - 1],
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
