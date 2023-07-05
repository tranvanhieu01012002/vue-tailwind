<template>
  <div class="flex justify-between border-t-2 border-gray-900">
    <div class="left text-xl mt-2"></div>
    <div class="right flex flex-row">
      <div
        v-for="(link, index) in links"
        :key="index"
        :class="link.active ? 'active' : 'bg-violet-300'"
        class="ml-2 rounded-md w-10 h-10 hover:bg-violet-500 text-2xl flex justify-center items-center"
      >
        <button v-if="link.url" @click="emits('click', link.url)">
          <font-awesome-icon
            v-if="link.label === 'LEFT'"
            icon="fa-solid fa-angle-left"
          />
          <font-awesome-icon
            v-else-if="link.label === 'RIGHT'"
            icon="fa-solid fa-angle-right"
          />
          <span v-else>{{ link.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Link } from "@/types";
import { PropType, defineProps, defineEmits } from "vue";

defineProps({
  links: {
    type: Object as PropType<Link[]>,
    required: false,
  },
});

const emits = defineEmits(["click"]);
</script>
<style scoped lang="scss">
.active {
  background-color: rgb(133, 22, 150);
}
</style>
