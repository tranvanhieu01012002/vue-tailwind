<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'xmark']" />
        <span>cancel</span>
      </ButtonComponent>
      <ButtonComponent @click="saveProduct" :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">add product</span>
      </ButtonComponent>
    </div>
  </div>
  <div class="second-row">
    <div :class="`grid grid-cols-11 ${GAP_OUT_COMPONENT}`">
      <div class="col-span-8">
        <div :class="`grid grid-flow-row auto-rows-max ${GAP_OUT_COMPONENT}`">
          <GeneralInformation>
            <template #type>product</template>
          </GeneralInformation>
          <MediaComponent />
          <PricingComponent />
          <InventoryComponent />
          <VariationComponent />
          <ShippingComponent />
        </div>
      </div>
      <div class="col-span-3">
        <div :class="`grid grid-flow-row auto-rows-max ${GAP_OUT_COMPONENT}`">
          <CategoryComponent />
          <StatusComponent
            :status="status"
            :current-status-id="currentStatusId"
            @update-id="updateStatusId"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ButtonComponent, BreadcrumbDefault } from "@/components";
import { GAP_OUT_COMPONENT } from "@/constants";
import {
  GeneralInformation,
  MediaComponent,
  StatusComponent,
  CategoryComponent,
  PricingComponent,
  InventoryComponent,
  VariationComponent,
  ShippingComponent,
} from "./components";
import {
  useGeneralInformationStore,
  useMediaStore,
  usePriceStore,
  useInventoryStore,
  useVariationStore,
  useShippingStore,
  useCategoryStore,
} from "@/stores";
import { storeToRefs } from "pinia";
import { PRODUCTS_STATUS } from "@/constants";
import { useProductCompletion } from "@/stores";
import { onMounted, onBeforeUnmount } from "vue";
import { SelectType } from "@/types";
import { ref } from "vue";

const { updateShow } = useProductCompletion();
const { name, description } = storeToRefs(useGeneralInformationStore());
const { images } = storeToRefs(useMediaStore());
const { price, discountsType, taxType } = storeToRefs(usePriceStore());
const { SKU, quantity, barcode } = storeToRefs(useInventoryStore());
const { variations } = storeToRefs(useVariationStore());
const { shippingInfo } = storeToRefs(useShippingStore());
const { categories, tags } = storeToRefs(useCategoryStore());

const saveProduct = () => {
  console.log({
    name: name.value,
    description: description.value,
    images: images.value,
    price: price.value,
    discountsType: discountsType.value,
    taxType: taxType.value,
    SKU: SKU.value,
    quantity: quantity.value,
    barcode: barcode.value,
    variations: variations.value,
    shippingInfo: shippingInfo.value,
    categories: categories.value,
    tags: tags.value,
  });
};

const status = ref<SelectType[]>(
  Object.values(PRODUCTS_STATUS).map((item: string, index) => ({
    id: index,
    name: item,
    value: item,
    description: "",
  }))
);
const currentStatusId = ref(0);

onMounted(() => {
  updateShow(true);
});

onBeforeUnmount(() => {
  updateShow(false);
});

const updateStatusId = (newId: number) => {
  currentStatusId.value = newId;
};
</script>
<style scoped lang="scss"></style>
