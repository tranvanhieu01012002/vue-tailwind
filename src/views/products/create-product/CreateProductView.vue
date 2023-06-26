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
import { SelectType, ShippingType } from "@/types";
import { ref } from "vue";
import Swal from "sweetalert2";
import { authApi } from "@/api";

const { updateShow } = useProductCompletion();
const { name, description } = storeToRefs(useGeneralInformationStore());
const { images } = storeToRefs(useMediaStore());
const { price, discountsType, taxType, currentDiscountId, currentTaxId } =
  storeToRefs(usePriceStore());
const { SKU, quantity, barcode } = storeToRefs(useInventoryStore());
const { variations } = storeToRefs(useVariationStore());
const { shippingInfo } = storeToRefs(useShippingStore());
const { selectedCategories, selectedTags } = storeToRefs(useCategoryStore());

const saveProduct = () => {
  console.log(setupData());
  Swal.fire({
    title: "Do you want to save?",
    showCancelButton: true,
    confirmButtonText: "Save",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await postData();
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};

const setupData = (): FormData => {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("description", description.value);
  images.value.map((image: File, index) =>
    formData.append(`file[${index}]`, image.name)
  );
  formData.append("price", `${price.value}`);
  formData.append(
    "discount",
    `${discountsType.value[currentDiscountId.value].value}`
  );
  formData.append("tax", `${taxType.value[currentTaxId.value].value}`);
  formData.append("sku", SKU.value);
  formData.append("quantity", `${quantity.value}`);
  formData.append("barcode", barcode.value);
  variations.value.map((variation, index) =>
    Object.keys(variation).map((variationKey) =>
      formData.append(
        `variation[${index}][${variationKey}]`,
        variations.value[index][variationKey]
      )
    )
  );
  Object.keys(shippingInfo.value).map((item: keyof ShippingType, index) => {
    formData.append(`shipping[${index}]`, `${shippingInfo.value[item]}`);
  });
  selectedCategories.value.map((category, index) => {
    formData.append(`category[${index}]`, `${category.id}`);
  });
  selectedTags.value.map((tag, index) =>
    formData.append(`tag[${index}]`, `${tag.id}`)
  );
  formData.append("status", status.value[currentStatusId.value].name);
  return formData;
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

const postData = async () => {
  const { data } = await authApi.post("products", setupData());
  console.log(data);
};

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
