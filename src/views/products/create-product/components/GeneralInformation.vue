<template>
  <PaddingComponent>
    <template #title>General information</template>
    <template #content>
      <div :class="`grid grid-flow-row auto-rows-max ${GAP_IN_COMPONENT}`">
        <InputComponent :value="name" @type="(value) => (name = value)">
          <slot name="type"></slot> information
        </InputComponent>
        <InputComponent
          :value="description"
          @type="(value) => setDescription(value)"
          :input-tag="Input.TEXTAREA"
        >
          general information
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
import { Input } from "@/enums";
import { useGeneralInformationStore } from "@/stores";
import { storeToRefs } from "pinia";

const { name, description } = storeToRefs(useGeneralInformationStore());
const { setDescription } = useGeneralInformationStore();
</script>
<style scoped lang="scss"></style>
