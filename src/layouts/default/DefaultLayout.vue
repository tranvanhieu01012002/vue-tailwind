<template>
  <div class="bg-gray-300 grid grid-cols-[15%_85%]">
    <div class="px-4 bg-white">
      <LeftBar />
    </div>
    <div class="container-slot">
      <div class="bg-white">
        <HeaderComponent />
      </div>
      <div class="px-5 py-8">
        <div
          class="container-app products grid grid-flow-row auto-rows-max gap-y-8"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LeftBar from "../default/left/LeftBar.vue";
import HeaderComponent from "./header/HeaderComponent.vue";
</script>
<style></style>
