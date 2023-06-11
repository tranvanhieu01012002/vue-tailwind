<template>
  <div class="bg-white p-2 rounded-md shadow-lg shadow-gray-400">
    <div class="header flex justify-between capitalize">
      <div
        class="header-center w-full h-48 flex justify-center relative"
        :style="image"
      >
        <div
          class="user-basic-info absolute top-20 flex justify-center flex-col items-center"
        >
          <img
            :src="avatar"
            class="h-48 w-48 rounded-full mt-6 border-solid border-4 border-gray-400"
          />
          <div class="mt-3">
            <span>linda blair</span>
            <SpanStatusComponent class="ml-2">premium</SpanStatusComponent>
          </div>
          <p class="text-gray-400 text-sm mt-2">abc@gmail.com</p>
        </div>
      </div>
    </div>
    <div
      class="content h-44 mx-5 border-solid border-b-2 border-gray-400"
    ></div>
    <div class="user-info_list m-5">
      <div class="info flex justify-between mb-5 last:mb-0">
        <div class="left flex">
          <CircleIcon :icon-style="icon" />
          <div class="pl-3">
            <span v-if="type" class="text-gray-400">{{ type }}</span>
            <div :class="[type != '' ? '' : 'pt-3']">
              {{ content }}
            </div>
          </div>
        </div>
        <div v-if="value != ''" class="right">
          {{ value }}
        </div>
      </div>
      <div class="info flex justify-between mb-5 last:mb-0">
        <div class="left flex">
          <CircleIcon :icon-style="icon" />
          <div class="pl-3">
            <span v-if="type" class="text-gray-400">{{ type }}</span>
            <div :class="[type != '' ? '' : 'pt-3']">
              {{ content }}
            </div>
          </div>
        </div>
        <div v-if="value != ''" class="right">
          {{ value }}
        </div>
      </div>
      <div class="info flex justify-between mb-5 last:mb-0">
        <div class="left flex">
          <CircleIcon :icon-style="icon" />
          <div class="pl-3">
            <span v-if="type" class="text-gray-400">{{ type }}</span>
            <div :class="[type != '' ? '' : 'pt-3']">
              {{ content }}
            </div>
          </div>
        </div>
        <div v-if="value != ''" class="right">
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CircleIcon, SpanStatusComponent } from "@/components";
import { CircleIcon as CircleIconType } from "@/types";
import { defineProps } from "vue";
defineProps({
  type: {
    type: String,
    required: false,
    default: "",
  },
  content: {
    type: String,
    required: true,
    default: "Shipping",
  },
  value: {
    type: String,
    required: false,
    default: "",
  },
});

const image = {
  backgroundImage: "url('https://wallpaperaccess.com/full/187161.jpg')",
  backgroundSize: "contain",
};
const avatar =
  "https://kenh14cdn.com/thumb_w/600/2016/avatar-1477593299631-0-0-375-600-crop-1477594107072.jpg";

const icon: CircleIconType = {
  icon: ["fas", "money-bill"],
  borderInside: "bg-gray-400",
  borderOutside: "bg-gray-200",
  color: "text-gray-800",
};
</script>
<style scoped lang="scss"></style>
