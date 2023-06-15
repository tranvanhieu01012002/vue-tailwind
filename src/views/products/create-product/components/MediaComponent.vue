<template>
  <PaddingComponent>
    <template #title>media</template>
    <template #content>
      <div :class="`grid grid-flow-row auto-rows-max ${GAP_IN_COMPONENT}`">
        <InputMediaComponent
          :num-of-files="5"
          :files="images"
          @get-files="updateImages"
        >
          photos
        </InputMediaComponent>
        <InputMediaComponent :icon-type="'film'">videos</InputMediaComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputMediaComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
import { useMediaStore } from "@/stores";
import { storeToRefs } from "pinia";

const { images } = storeToRefs(useMediaStore());
const { updateImages } = useMediaStore();
</script>
<style scoped lang="scss"></style>
