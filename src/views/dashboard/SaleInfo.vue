<template>
  <div class="w-full bg-white rounded-md shadow-lg shadow-gray-400 p-5">
    <div
      class="sale-info__icon w-14 h-14 bg-violet-200 rounded-full flex justify-center items-center"
    >
      <div
        class="w-10 h-10 bg-violet-400 rounded-full flex justify-center items-center"
      >
        <!-- <font-awesome-icon
          class="w-6 h-6 text-primary"
          :icon="['fas', 'money-bill']"
        /> -->
        <font-awesome-icon
          class="w-6 h-6 text-primary"
          :icon="['fas', 'cart-shopping']"
        />
      </div>
    </div>
    <div class="sale-info__text my-4">Total Revenue</div>
    <div class="sale-info__price flex">
      <div class="text-3xl font-semibold">$75,403</div>
      <div
        class="sale-info__price__percent bg-green-600 rounded-3xl h-6 px-2 mx-3 mt-2"
      >
        +10%
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.sale-info__text {
  font-size: 20px;
  color: #667085;
}
.money--icon {
}
</style>
