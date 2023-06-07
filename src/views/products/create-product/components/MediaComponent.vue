<template>
  <PaddingComponent>
    <template #title>media</template>
    <template #content>
      <div :class="`grid grid-flow-row auto-rows-max ${GAP_IN_COMPONENT}`">
        <InputMediaComponent>photos</InputMediaComponent>
        <InputMediaComponent :icon-type="'film'">videos</InputMediaComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputMediaComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
</script>
<style scoped lang="scss"></style>
