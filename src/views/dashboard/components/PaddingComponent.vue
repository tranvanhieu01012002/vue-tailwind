<template>
  <div class="bg-white p-5 rounded-md">
    <div class="header flex justify-between">
      <div class="header-left">
        <strong class="header-left__title text-gray-custom-100"
          ><slot name="title"></slot
        ></strong>
        <div class="description text-gray-custom">
          <slot name="description"></slot>
        </div>
      </div>
      <div class="header-center"><slot name="center"></slot></div>
      <div class="header-right">
        <font-awesome-icon
          class="text-3xl"
          :icon="['fas', 'ellipsis-vertical']"
        />
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.header-left__title {
  font-size: 20px;
}
</style>
