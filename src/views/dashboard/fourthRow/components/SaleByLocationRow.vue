<template>
  <div class="row flex justify-between mt-2">
    <div class="left flex">
      <div class="img">
        <img :src="showFlag" width="60" />
      </div>
      <div class="country ml-2">
        <div class=""><strong>United Kingdom</strong></div>
        <div class="sale text-gray-custom-100">350 sales</div>
      </div>
    </div>
    <div class="right">
      <div class="price pt-2">
        <span class="mr-3"><strong>$2033</strong></span>
        <SpanStatusComponent>+20</SpanStatusComponent>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";
import { SpanStatusComponent } from "@/components";
const props = defineProps({
  flag: {
    type: String,
    required: false,
    default: "vn",
  },
});
const url = "https://hatscripts.github.io/circle-flags/flags";
const showFlag = computed((): string => {
  return `${url}/${props.flag}.svg`;
});
</script>
<style scoped lang="scss"></style>
