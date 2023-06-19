<template>
  <div class="bg-gray-300 grid grid-cols-[15%_85%]">
    <div class="px-4 bg-white">
      <LeftBar />
    </div>
    <div class="container-slot">
      <div class="bg-white sticky top-0 z-20">
        <HeaderComponent />
      </div>
      <div class="px-5 py-8">
        <div
          class="container-app products grid grid-flow-row auto-rows-max gap-y-8"
        >
          <slot></slot>
        </div>
      </div>
      <div
        v-if="isShow"
        class="bg-white py-5 sticky top-0 bottom-0 left-0 w-full"
      >
        <ProductCompletion :percent="percent" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductCompletion } from "@/components";
import LeftBar from "../default/left/LeftBar.vue";
import HeaderComponent from "./header/HeaderComponent.vue";
import { useProductCompletion } from "@/stores";
import { storeToRefs } from "pinia";
const productCompletionStore = useProductCompletion;
const { percent, isShow } = storeToRefs(productCompletionStore());
</script>
<style></style>
