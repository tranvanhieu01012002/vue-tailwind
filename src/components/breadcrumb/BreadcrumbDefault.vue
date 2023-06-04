<template>
  <div class="breadcrumb">
    <div class="name"><h2 class="text-4xl">Product</h2></div>
    <div class="list mt-3">
      <ol class="flex">
        <li class="item">
          <div class="item-detail">
            <span class="text-primary text-2xl">home</span>
            <font-awesome-icon
              class="mx-5 text-gray-400"
              :icon="['fas', 'angle-right']"
            />
          </div>
        </li>
        <li class="item">
          <div class="item-detail">
            <span class="text-primary text-2xl">home</span>
            <font-awesome-icon
              class="mx-5 text-gray-400"
              :icon="['fas', 'angle-right']"
            />
          </div>
        </li>
        <li class="item">
          <div class="item-detail">
            <span class="text-gray-400 text-2xl">home</span>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss"></style>
