<template>
  <div class="flex justify-between border-t-2 border-gray-900">
    <div class="left text-xl mt-2">
      <!-- Show from {{ `${startNumber}-${endNumber}` }} from 20 -->
    </div>
    <div class="right flex flex-row">
      <div
        v-for="(link, index) in links"
        :key="index"
        :class="link.active ? 'active' : 'bg-violet-300'"
        class="ml-2 rounded-md w-10 h-10 hover:bg-violet-500 text-2xl flex justify-center items-center"
      >
        <button v-if="link.url" @click="emits('click', link.url)">
          <font-awesome-icon
            v-if="showIndex(link.label).includes('fa-solid')"
            :icon="showIndex(link.label)"
          />
          <span v-else>{{ showIndex(link.label) }}</span>
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

const showIndex = (index: string) => {
  if (index.includes("Previous")) {
    return "fa-solid fa-angle-left";
  } else if (index.includes("Next")) {
    return "fa-solid fa-angle-right";
  } else return index;
};
</script>
<style scoped lang="scss">
.active {
  background-color: rgb(133, 22, 150);
}
</style>
