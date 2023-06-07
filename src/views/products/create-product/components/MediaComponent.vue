<template>
  <PaddingComponent>
    <template #title>media</template>
    <template #content>
      <div class="grid grid-flow-row auto-rows-max gap-5">
        <InputMediaComponent>photos</InputMediaComponent>
        <InputMediaComponent :icon-type="'film'">videos</InputMediaComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputMediaComponent } from "@/components";
</script>
<style scoped lang="scss"></style>
