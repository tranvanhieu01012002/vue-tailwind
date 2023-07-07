<template>
  <table class="w-full">
    <thead class="header w-full">
      <tr class="bg-gray-300 capitalize rounded-tr-2xl rounded-tl-2xl w-full">
        <th
          v-for="(thead, indexHeader) in headers.thead"
          :key="indexHeader"
          class="py-5"
        >
          <div class="flex">
            <div v-if="indexHeader == checkboxIndex" class="input mx-5">
              <input type="checkbox" class="w-5 h-5" />
            </div>
            <span>{{ thead.name }}</span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="body">
      <tr
        v-for="(row, indexRow) in showData()"
        :key="indexRow"
        class="odd:bg-gray-100 hover:bg-gray-400"
      >
        <td v-for="(item, indexItem) in row" :key="indexItem" class="pt-5 pb-4">
          <div class="flex">
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
          </div>
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
              <SpanStatusComponent
                :bg="SpanStatus[item.content as keyof typeof SpanStatus]"
                >{{ item.content }}</SpanStatusComponent
              >
            </div>
            <div :class="item.style" v-else>{{ item.content }}</div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import ProductCell from "./ProductCell.vue";
import { SpanStatus } from "@/enums";
import { SpanStatusComponent } from "@/components";

const props = defineProps({
  headers: {
    type: Object,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});
const showData = () => props.data.map((item: any) => createArrFromObj(item));
const checkboxIndex = 0;
const emit = defineEmits(["clickIcon"]);

const createArrFromObj = (obj: any) => {
  const arr = [];
  console.log("op");
  Object.values(obj).map((item: any) => {
    arr.push(
      typeof item === "object" && item != null
        ? {
            image:
              item.image ??
              "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/14%20prm.jpeg",
            name: item.name,
            info: item.description,
            slot: "product",
            span: 2,
          }
        : {
            content: item,
            slot: Object.values(SpanStatus).includes(item) ? "status" : "",
          }
    );
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
