<template>
  <button
    :class="style"
    class="btn rounded-md w-40 border-2 border-solid mx-2 py-2 capitalize"
  >
    <strong><slot></slot></strong>
  </button>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
defineProps({ style: { type: String, required: false, default: "btn-white" } });
</script>
<style lang="scss" scoped>
.btn {
  font-size: 18px;
}
.btn-primary {
  background-color: var(--color-primary);
  strong {
    color: #fff;
  }
}
.btn-normal {
  background-color: var(--color-normal);
  strong {
    color: var(--color-primary);
  }
}
.btn-white {
  background-color: #fff;
}
</style>
