<template>
  <div
    :class="iconStyle.borderOutside"
    class="sale-info__icon w-12 h-12 rounded-full flex justify-center items-center"
  >
    <div
      :class="iconStyle.borderInside"
      class="w-9 h-9 rounded-full flex justify-center items-center"
    >
      <font-awesome-icon
        class="w-6 h-6"
        :class="iconStyle.color"
        :icon="iconStyle.icon"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { CircleIcon } from "@/types";
import { PropType, defineProps } from "vue";

defineProps({
  iconStyle: {
    type: Object as PropType<CircleIcon>,
    required: true,
  },
});
</script>
<style scoped lang="scss"></style>
