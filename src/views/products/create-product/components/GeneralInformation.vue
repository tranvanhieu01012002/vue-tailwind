<template>
  <PaddingComponent>
    <template #title>General information</template>
    <template #content>
      <div :class="`grid grid-flow-row auto-rows-max ${GAP_IN_COMPONENT}`">
        <InputComponent
          :name="'name-input-1'"
          :value="name"
          @type="(value) => (name = value)"
          :validate="VALIDATION.MIN_6"
        >
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
import { VALIDATION } from "@/constants";
const { name, description } = storeToRefs(useGeneralInformationStore());
const { setDescription } = useGeneralInformationStore();
</script>
<style scoped lang="scss"></style>
