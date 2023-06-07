<template>
  <div class="flex justify-between border-t-2 border-gray-900">
    <div class="left text-xl mt-2">
      Show from {{ `${startNumber}-${endNumber}` }} from 20
    </div>
    <div class="right flex flex-row">
      <div class="ml-2 rounded-md w-10 h-10 bg-violet-300 hover:bg-violet-500">
        <svg
          class="h-8 w-8 text-black mt-1 ml-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </div>
      <div
        v-for="item in arrayNumber"
        :key="item"
        :class="+item === currentIndex ? 'active' : 'bg-violet-300'"
        class="ml-2 rounded-md w-10 h-10 hover:bg-violet-500 text-2xl flex justify-center items-center"
      >
        {{ item }}
      </div>
      <div class="ml-2 rounded-md w-10 h-10 bg-violet-300 hover:bg-violet-500">
        <svg
          class="h-8 w-8 text-black mt-1 ml-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";
const defaultLength = 6;
const props = defineProps({
  currentIndex: {
    type: Number,
    required: false,
    default: 8,
  },
  startNumber: {
    type: Number,
    required: false,
    default: 6,
  },
  endNumber: {
    type: Number,
    required: false,
    default: 20,
  },
});
const arrayNumber = computed((): Array<string> => {
  const numberOfArray = props.endNumber - props.startNumber + 1;
  if (numberOfArray > defaultLength) {
    const arr: Array<string> = [...Array(defaultLength - 2)].map(
      (_, index) => `${index + props.startNumber}`
    );
    arr.push("...");
    arr.push(`${props.endNumber}`);
    return arr;
  } else {
    return [...Array(numberOfArray)].map(
      (_, index) => `${index + props.startNumber}`
    );
  }
});
</script>
<style scoped lang="scss">
.active {
  background-color: rgb(133, 22, 150);
}
</style>
