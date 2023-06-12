<template>
  <div class="bg-gray-300 flex layout p-20">
    <div :class="`grid grid-cols-2 w-full ${GAP_OUT_COMPONENT}`">
      <div class="left"><slot></slot></div>
      <div class="right w-full">
        <img :src="image" alt="" class="h-full rounded-md" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { GAP_OUT_COMPONENT } from "@/constants";

const image =
  "https://smartland.vn/wp-content/uploads/2022/11/ban-do-danh-sach-cac-san-bay-tai-viet-nam.jpg";
</script>
<style scoped lang="scss">
.layout {
  height: 100vh;
}
.right {
  height: 80vh;
}
</style>
