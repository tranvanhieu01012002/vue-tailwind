<template>
  <div class="w-full">
    <div class="header">
      <div
        :class="[headers?.customCss, showGrid(headers.grid)]"
        class="bg-gray-300 capitalize rounded-tr-2xl rounded-tl-2xl"
      >
        <div
          v-for="(thead, index) in headers.thead"
          :key="index"
          :class="[
            index == checkboxIndex ? 'flex' : '',
            thead.customCss,
            showColSpan(thead.span),
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
      <div
        v-for="(row, indexRow) in data"
        :key="indexRow"
        :class="showGrid(grid)"
        class="odd:bg-gray-100 hover:bg-gray-400"
      >
        <div
          v-for="(item, index) in row"
          :key="index"
          :class="showColSpan(item.span)"
          class="pt-5 pb-4 flex"
        >
          <label v-if="index === checkboxIndex" class="mx-5">
            <div class="input mt-3">
              <input type="checkbox" class="w-5 h-5" />
            </div>
          </label>
          <ProductCell
            v-if="item.slot === 'product'"
            :product="{
              image: item.image,
              info: item.info,
              name: item.name,
            }"
          />
          <div class="pt-3">
            <div v-if="'action' in item" class="text-gray-custom-100 text-2xl">
              <font-awesome-icon
                v-for="icon in item.action"
                :key="icon"
                class="mr-3 last:mr-0"
                :icon="icon"
              />
            </div>
            <div v-if="item.slot === 'status'">
              <SpanStatusComponent :bg="SpanStatus.SHIP">{{
                item.content
              }}</SpanStatusComponent>
            </div>
            <div :class="item.style" v-else>{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import ProductCell from "./ProductCell.vue";
import { SpanStatus } from "@/enums";
import SpanStatusComponent from "../SpanStatusComponent.vue";
const checkboxIndex = 0;
defineProps({
  headers: {
    type: Object,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
  grid: {
    type: Number,
    required: true,
  },
});

const showGrid = (grid: number): string => {
  return `grid grid-cols-${grid}`;
};

const showColSpan = (span: number): string => {
  return `col-span-${span}`;
};
</script>
<style scoped lang="scss"></style>
