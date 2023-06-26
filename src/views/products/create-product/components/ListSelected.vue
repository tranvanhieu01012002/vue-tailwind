<template>
  <div class="grid grid-cols-2">
    <SpanStatusComponent v-for="(selected, index) in list" :key="index">
      <div class="flex justify-between text-xs">
        <span>{{ selected.name }}</span>
        <button @click="$emit('removeItem', index)" class="remove">X</button>
      </div>
    </SpanStatusComponent>
  </div>
</template>
<script setup lang="ts">
import { SelectType } from "@/types";
import { SpanStatusComponent } from "@/components";
import { PropType, defineProps, defineEmits } from "vue";
defineProps({
  list: {
    type: Object as PropType<SelectType[]>,
    required: true,
  },
});

defineEmits(["removeItem"]);
</script>
<style scoped lang="scss"></style>
