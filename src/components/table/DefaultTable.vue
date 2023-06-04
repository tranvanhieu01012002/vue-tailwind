<template>
  <div class="table w-full">
    <div class="header">
      <div
        :class="headers?.customCss"
        class="grid bg-gray-300 capitalize auto-cols-max rounded-tr-2xl rounded-tl-2xl"
      >
        <div
          v-for="(thead, index) in headers.thead"
          :key="index"
          :class="[
            index == checkboxIndex ? 'flex col-span-2' : '',
            thead.customCss,
          ]"
          class="py-5"
        >
          <div v-if="index == checkboxIndex" class="input mx-5">
            <input type="checkbox" class="w-5 h-5" />
          </div>
          <span>{{ thead.name }}</span>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="grid grid-cols-9 odd:bg-gray-100 hover:bg-gray-400">
        <div class="pt-3 col-span-2">
          <label class="flex ml-5">
            <div class="input mt-3">
              <input type="checkbox" class="w-5 h-5" />
            </div>
            <div class="ml-3">
              <div class="product-cell flex">
                <div class="img h-12 w-12">
                  <img src="@/assets/img/products/Img.png" alt="" />
                </div>
                <div class="content text-sm ml-2">
                  <div class="content--name">IPhone</div>
                  <div class="content--sku text-gray-custom-100">
                    SKU:300032
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div class="pt-5 pb-4">
          <span class="text-sky-400">4034</span>
        </div>
        <div class="pt-5 pb-4 text-gray-custom-100">Watch</div>
        <div class="pt-5 pb-4 text-gray-custom-100">10</div>
        <div class="pt-5 pb-4 text-gray-custom-100">$435</div>
        <div class="pt-5 pb-4 text-gray-custom-100">
          <SpanStatusComponent>Delivery</SpanStatusComponent>
        </div>
        <div class="pt-5 pb-4 text-gray-custom-100">29 Jul 2023</div>
        <div class="pt-5 pb-4 text-gray-custom-100 text-2xl">
          <font-awesome-icon class="mr-3 last:mr-0" :icon="['fas', 'eye']" />
          <font-awesome-icon class="mr-3 last:mr-0" :icon="['fas', 'pencil']" />
          <font-awesome-icon class="mr-3 last:mr-0" :icon="['fas', 'trash']" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const checkboxIndex = 0;
defineProps({
  headers: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped lang="scss"></style>
