<template>
  <div class="bg-white p-5 rounded-md shadow-lg shadow-gray-400">
    <div class="header flex justify-between capitalize">
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
        <slot name="right"></slot>
      </div>
    </div>
    <div class="content pt-5">
      <slot name="content"></slot>
    </div>
    <div class="footer mt-5"><slot name="footer"></slot></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.header-left__title {
  font-size: 20px;
}
</style>
