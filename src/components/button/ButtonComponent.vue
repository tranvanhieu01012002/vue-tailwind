<template>
  <button
    :type="type"
    :class="style"
    class="btn rounded-md w-40 border-2 border-solid py-2 capitalize hover:bg-sky-500"
    @click="emit('click')"
  >
    <strong><slot></slot></strong>
  </button>
</template>
<script setup lang="ts">
import { ButtonType } from "@/enums";
import { defineProps, defineEmits, PropType } from "vue";
const emit = defineEmits(["click"]);
defineProps({
  style: { type: String, required: false, default: "btn-white" },
  type: {
    type: String as PropType<ButtonType>,
    required: false,
    default: ButtonType.BUTTON,
  },
});
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
