<template>
  <PaddingComponent>
    <template #title>shipping</template>
    <template #content>
      <button @click="updateChecked" class="physical-product flex mb-5">
        <div class="pt-1">
          <input
            :checked="isPhysical"
            type="checkbox"
            class="w-5 pt-2 h-5 mr-3"
          />
        </div>
        <div>
          <span>This is physical product</span>
        </div>
      </button>
      <div v-if="isPhysical" :class="`grid-cols-4 grid ${GAP_IN_COMPONENT}`">
        <InputComponent
          v-for="(value, key) in shipping"
          :key="key"
          :value="value"
        >
          {{ key }}
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
import { ref } from "vue";
const isPhysical = ref(false);
const updateChecked = () => {
  isPhysical.value = !isPhysical.value;
};

const shipping = ref({
  height: "20",
  width: "20",
  length: "20",
  weight: "20",
});
</script>
<style scoped lang="scss"></style>
