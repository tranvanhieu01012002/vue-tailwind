<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'download']" />
        <span>cancel</span>
      </ButtonComponent>
      <ButtonComponent
        @click="clickBtn"
        :type="ButtonType.BUTTON"
        :style="'btn-primary ml-4'"
      >
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">save category</span>
      </ButtonComponent>
    </div>
  </div>
  <form
    @submit="submit"
    :class="`second-row grid grid-cols-11 ${GAP_OUT_COMPONENT}`"
  >
    <div class="col-span-3">
      <PaddingComponent>
        <template #content>
          <InputMediaComponent :files="files" @get-files="getFiles">
            Thumbnail
          </InputMediaComponent>
        </template>
      </PaddingComponent>
    </div>
    <div class="col-span-8">
      <GeneralInformation>
        <template #type>category</template>
      </GeneralInformation>
    </div>
    <button ref="form" type="submit" class="hide"></button>
  </form>
</template>
<script setup lang="ts">
import {
  BreadcrumbDefault,
  ButtonComponent,
  InputMediaComponent,
  PaddingComponent,
} from "@/components";
import GeneralInformation from "../../create-product/components/GeneralInformation.vue";
import { GAP_OUT_COMPONENT } from "@/constants";
import { ref } from "vue";
import { useGeneralInformationStore } from "@/stores";
import { storeToRefs } from "pinia";
import { ButtonType } from "@/enums";
import Swal from "sweetalert2";
import { authApi, nonAuthApi } from "@/api";
import { useNotification } from "@/hooks";
import { useRouter } from "vue-router";

const router = useRouter();
const { notify } = useNotification();
const { name, description } = storeToRefs(useGeneralInformationStore());

const files = ref([]);
const form = ref();

const clickBtn = () => {
  (form.value as HTMLButtonElement).click();
};

const submit = (e: Event) => {
  e.preventDefault();
  Swal.fire({
    title: "Do you want to save?",
    showCancelButton: true,
    confirmButtonText: "Save",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await handleUpload();
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};

const getFiles = (filesInput: []) => {
  files.value = filesInput;
};

const setupData = () => {
  const formData = new FormData();
  files.value.map((item: File, index) =>
    formData.append(`file[${index}]`, item.name)
  );
  formData.append("name", name.value);
  formData.append("description", description.value);
  return formData;
};

const getData = async () => {
  const { data } = await authApi.post("categories", setupData());
  return data;
};

const postFile = async (url: string) => {
  const { data } = await nonAuthApi.put("", files.value[0], {
    baseURL: url,
  });
  return data;
};

const resetField = () => {
  name.value = "";
  description.value = "";
};

const handleUpload = async () => {
  const response = await getData();
  resetField();
  if (response.data.url) {
    await postFile(response.data.url);
  }
  notify(response.message);
  router.push({ name: "categories" });
};
</script>
<style scoped lang="scss"></style>
