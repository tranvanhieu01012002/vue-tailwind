<template>
  <div class="user pl-4 flex">
    <div class="user-info__avatar">
      <img
        src="@/assets/img/avatar.jpg"
        alt=""
        class="user-info__img w-10 h-10 rounded-full mr-2"
      />
      <div
        class="user-info__avatar--active w-4 h-4 bg-green-600 border-solid border-2 border-white rounded-full"
      ></div>
    </div>
    <div class="user-info flex">
      <div class="user-info__div">
        <strong>Hieu tran van</strong>
        <div class="user-info__job">Manager</div>
      </div>
      <div class="user-info__more pt-5 ml-8">
        <ToggleArrow />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ToggleArrow from "@/components/ToggleArrow.vue";
</script>
<style lang="scss" scoped>
.user {
  border-left: 1px solid #0ff;
}
.user-info__avatar {
  position: relative;
}
.user-info__avatar--active {
  position: absolute;
  right: 8px;
  bottom: 7px;
}
</style>
