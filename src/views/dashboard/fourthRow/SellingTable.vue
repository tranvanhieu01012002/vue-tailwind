<template>
  <PaddingComponent>
    <template #title>Top selling product</template>
    <template #content>
      <table class="w-full table">
        <thead>
          <tr>
            <th class="py-4 bg-gray-300">Product</th>
            <th class="py-4 bg-gray-300">Sales</th>
            <th class="py-4 bg-gray-300">Amount</th>
            <th class="py-4 bg-gray-300">Price</th>
            <th class="py-4 bg-gray-300">status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-bottom-solid">
            <td class="py-4"><div class="text-center">401</div></td>
            <td class="py-4"><div class="text-center">401</div></td>
            <td class="py-4"><div class="text-center">401</div></td>
            <td class="py-4"><div class="text-center">401</div></td>
            <td class="py-4"><div class="text-center">401</div></td>
          </tr>
        </tbody>
      </table>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import PaddingComponent from "../components/PaddingComponent.vue";
</script>
<style scoped lang="scss">
.table-header {
  padding: 20px;
}
</style>
<!-- <div class="product-cell flex">
  <div class="img">
    <img
      src="@/assets/img/products/Img.png"
      class="h-18 w-18 m-3"
      alt=""
    />
  </div>
  <div class="content mt-3">
    <div class="content--name">IPhone</div>
    <div class="content--sku text-gray-custom-100 text-sm">
      SKU:300032
    </div>
  </div>
</div> -->
