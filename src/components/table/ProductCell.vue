<template>
  <div class="">
    <div class="product-cell flex">
      <div class="img h-12 w-12">
        <img :src="product.image" alt="" />
      </div>
      <div class="content text-sm ml-2">
        <div class="content--name">{{ product.name }}</div>
        <div class="content--info text-gray-custom-100">
          {{ product.info }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, defineProps } from "vue";
import { ProductCell } from "@/types";

defineProps({
  product: {
    type: Object as PropType<ProductCell>,
    required: true,
  },
});
</script>
<style scoped lang="scss"></style>
