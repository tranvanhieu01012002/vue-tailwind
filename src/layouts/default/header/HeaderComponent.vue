<template>
  <div class="w-full header flex justify-between p-4">
    <div class="header-left icon-small--center">
      <svg
        class="h-8 w-8 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
    <div class="header-right flex">
      <IconRight />
      <UserInfo />
    </div>
  </div>
</template>
<script setup lang="ts">
import IconRight from "./IconRight.vue";
import UserInfo from "./UserInfo.vue";
</script>
<style></style>
