<template>
  <div class="text-money">
    <div class="text-money--title text-gray-custom-100 text-center">
      <slot></slot>
    </div>
    <div class="text-money--money">
      <strong
        >{{ numeral(price).format("$ 0.00 a") }}
        <font-awesome-icon
          :class="showArrow == 'arrow-up' ? 'text-green-400' : 'text-red-400'"
          :icon="['fass', showArrow]"
      /></strong>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";
import numeral from "numeral";
const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const showArrow = computed((): string => {
  if (props.status === "up") {
    return "arrow-up";
  } else return "arrow-down";
});
</script>
<style scoped lang="scss">
strong {
  font-size: 25px;
}
</style>
