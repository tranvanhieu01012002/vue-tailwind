<template>
  <div class="first-row flex justify-between">
    <BreadcrumbDefault />
    <div class="btn-group mt-6">
      <ButtonComponent :style="'btn-normal'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'xmark']" />
        <span>cancel</span>
      </ButtonComponent>
      <ButtonComponent @click="clickBtn" :style="'btn-primary'">
        <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
        <span class="">add product</span>
      </ButtonComponent>
    </div>
  </div>
  <div class="second-row">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-9">
        <div class="grid grid-flow-row auto-rows-max gap-8">
          <PaddingComponent>
            <template #title>General information</template>
            <template #content>
              <div class="grid grid-flow-row auto-rows-max gap-5">
                <InputComponent> general information </InputComponent>
                <InputComponent :input-tag="Input.TEXTAREA">
                  general information
                </InputComponent>
              </div>
            </template>
          </PaddingComponent>
          <PaddingComponent>
            <template #title>media</template>
            <template #content>
              <div class="grid grid-flow-row auto-rows-max gap-5">
                <InputMediaComponent>photos</InputMediaComponent>
                <!-- <InputMediaComponent>videos</InputMediaComponent> -->
              </div>
            </template>
          </PaddingComponent>
        </div>
      </div>
      <div class="col-span-3">
        <div class="grid grid-flow-row auto-rows-max gap-8">
          <PaddingComponent>
            <template #title>Category</template>
            <template #content>
              <div class="grid grid-flow-row auto-rows-max gap-5">
                <InputComponent :input-tag="Input.SELECT" :option="dataOption"
                  >select category</InputComponent
                >
                <InputComponent :input-tag="Input.SELECT" :option="dataOption"
                  >product tags</InputComponent
                >
              </div>
            </template>
          </PaddingComponent>
          <PaddingComponent>
            <template #title>status</template>
            <template #right
              ><SpanStatusComponent>Draft</SpanStatusComponent></template
            >
            <template #content>
              <div class="grid grid-flow-row auto-rows-max gap-5">
                <InputComponent :input-tag="Input.SELECT" :option="dataOption"
                  >select category</InputComponent
                >
              </div>
            </template>
          </PaddingComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BreadcrumbDefault from "@/components/breadcrumb/BreadcrumbDefault.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import PaddingComponent from "../dashboard/components/PaddingComponent.vue";
import InputComponent from "@/components/input/InputComponent.vue";
import SpanStatusComponent from "@/components/SpanStatusComponent.vue";
import InputMediaComponent from "@/components/input/InputMediaComponent.vue";
import { Input } from "@/enums";
import { Option } from "@/types";
const dataOption: Option[] = [
  { name: "data1", value: "data1" },
  { name: "data2", value: "data2" },
  { name: "data3", value: "data3" },
];
</script>
<style scoped lang="scss"></style>
