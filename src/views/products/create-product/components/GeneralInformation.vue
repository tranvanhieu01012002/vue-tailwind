<template>
  <PaddingComponent>
    <template #title>General information</template>
    <template #content>
      <div class="grid grid-flow-row auto-rows-max gap-5">
        <InputComponent> general information </InputComponent>
        <InputComponent :input-tag="Input.TEXTAREA">
          general information
        </InputComponent>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, InputComponent } from "@/components";
import { Input } from "@/enums";
</script>
<style scoped lang="scss"></style>
