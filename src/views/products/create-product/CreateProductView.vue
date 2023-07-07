<template>
  <Form class="first-row flex justify-between">
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
  </Form>
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
  useProductCompletion,
} from "@/stores";
import { storeToRefs } from "pinia";
import { Form } from "vee-validate";
import { PRODUCTS_STATUS, GAP_OUT_COMPONENT } from "@/constants";
import { onMounted, onBeforeUnmount, onUnmounted, ref } from "vue";
import { UploadImage, SelectType } from "@/types";
import Swal from "sweetalert2";
import { authApi, nonAuthApi } from "@/api";
import { ToastStatus } from "@/enums";

import { useEventBusValidate, useNotification } from "@/hooks";
const { updateShow } = useProductCompletion();
const { name, description } = storeToRefs(useGeneralInformationStore());
const { images } = storeToRefs(useMediaStore());
const { price, discountsType, taxType, currentDiscountId, currentTaxId } =
  storeToRefs(usePriceStore());
const { SKU, quantity, barcode } = storeToRefs(useInventoryStore());
const { variations } = storeToRefs(useVariationStore());
const { shippingInfo, isPhysical } = storeToRefs(useShippingStore());
const { selectedCategories, selectedTags } = storeToRefs(useCategoryStore());
const { error, startEventBus, stopEventBus } = useEventBusValidate();
const currentStatusId = ref(0);
const saveProduct = () => {
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

const setupData = (): FormData | boolean => {
  const dataValidated = validateData();
  if (dataValidated == -1) {
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
    formData.append("tax_fee", `${taxType.value[currentTaxId.value].value}`);
    formData.append("sku", SKU.value);
    formData.append("stock", `${quantity.value}`);
    formData.append("barcode", barcode.value);
    variations.value.map((variation, index) =>
      Object.keys(variation).map((variationKey) =>
        formData.append(
          `variation[${index}][${variationKey}]`,
          variations.value[index][variationKey]
        )
      )
    );
    if (isPhysical.value) {
      Object.keys(shippingInfo.value).map((ship, index) => {
        formData.append(
          `shipping[${index}][${ship}]`,
          `${shippingInfo.value[ship]}`
        );
      });
    }
    selectedCategories.value.map((category, index) => {
      formData.append(`categories[${index}]`, `${category.id}`);
    });
    selectedTags.value.map((tag, index) =>
      formData.append(`tag[${index}]`, `${tag.id}`)
    );
    formData.append("status", status.value[currentStatusId.value].name);
    return formData;
  } else {
    return false;
  }
};

const validateData = (): number => {
  let numOfError = -1;
  if (name.value === "") {
    useNotification().notify("name can not null", ToastStatus.ERROR);
    numOfError++;
  }
  if (price.value === 0) {
    useNotification().notify("price can not equal 0", ToastStatus.ERROR);
    numOfError++;
  }
  if (SKU.value === "") {
    useNotification().notify("SKU can not null", ToastStatus.ERROR);
    numOfError++;
  }
  if (barcode.value === "") {
    useNotification().notify("barcode can not null", ToastStatus.ERROR);
    numOfError++;
  }
  if (quantity.value === 0) {
    useNotification().notify("quantity can not equal 0", ToastStatus.ERROR);
    numOfError++;
  }
  return numOfError;
};

const status = ref<SelectType[]>(
  Object.values(PRODUCTS_STATUS).map((item: string, index) => ({
    id: index,
    name: item,
    value: item,
    description: "",
  }))
);

const postData = async () => {
  const productData = setupData();
  if (productData) {
    const { data } = await authApi.post("products", productData);
    const uploadImages: UploadImage[] = data.data;
    await Promise.all(
      uploadImages.map(
        async (file, index) =>
          await nonAuthApi.put("", images.value[index], { baseURL: file.url })
      )
    )
      .then(() =>
        useNotification().notify(
          "create product successful",
          ToastStatus.SUCCESS
        )
      )
      .catch(() =>
        useNotification().notify("oh can not upload image", ToastStatus.ERROR)
      );
  }
};

onMounted(() => {
  updateShow(true);
  startEventBus();
});

onBeforeUnmount(() => {
  updateShow(false);
});

onUnmounted(() => {
  stopEventBus();
});
const updateStatusId = (newId: number) => {
  currentStatusId.value = newId;
};
</script>
<style scoped lang="scss"></style>
