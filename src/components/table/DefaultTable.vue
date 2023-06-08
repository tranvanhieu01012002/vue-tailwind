<template>
  <div class="w-full">
    <div class="header w-full">
      <div
        class="bg-gray-300 capitalize rounded-tr-2xl rounded-tl-2xl w-full flex justify-between"
      >
        <div
          v-for="(thead, indexHeader) in headers.thead"
          :key="indexHeader"
          :class="[
            indexHeader == checkboxIndex ? 'flex' : '',
            thead.customCss,
            showBasicFlex(thead.span),
          ]"
          class="py-5"
        >
          <div v-if="indexHeader == checkboxIndex" class="input mx-5">
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
        class="odd:bg-gray-100 hover:bg-gray-400 flex justify-between"
      >
        <div
          v-for="(item, indexItem) in row"
          :key="indexItem"
          :class="showBasicFlex(item.span)"
          class="pt-5 pb-4 flex"
        >
          <label v-if="indexItem === checkboxIndex" class="mx-5">
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
              <button
                v-for="(icon, indexIcon) in item.action"
                @click="emit('clickIcon', indexIcon, indexItem)"
                :key="indexIcon"
              >
                <font-awesome-icon
                  class="mr-3 last:mr-0 hover:cursor-pointer"
                  :icon="icon"
                />
              </button>
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
import { defineProps, defineEmits } from "vue";
import ProductCell from "./ProductCell.vue";
import { SpanStatus } from "@/enums";
import { SpanStatusComponent } from "@/components";

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
const checkboxIndex = 0;
const emit = defineEmits(["clickIcon"]);

const showBasicFlex = (grid: number): string => {
  return `basis-${grid}/6`;
};
</script>
<style scoped lang="scss"></style>
