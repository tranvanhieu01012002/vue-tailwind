<template>
  <div
    class="list-time flex py-1 border-solid border-2 border-gray-400 bg-white"
  >
    <div class="first:ml-2 time active w-20 mr-2 text-center py-2 rounded-lg">
      All time
    </div>
    <div class="time w-20 mr-2 text-center py-2 rounded-lg">12 months</div>
    <div class="time w-20 mr-2 text-center py-2 rounded-lg">30 days</div>
    <div class="time w-20 mr-2 text-center py-2 rounded-lg">7 days</div>
    <div class="time w-20 mr-2 text-center py-2 rounded-lg">24 hours</div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.active {
  background-color: #dedefa;
  color: #7574c5;
}
</style>
