<template>
  <div class="bg-white p-5 rounded-md grid grid-flow-row gap-10">
    <div class="branch">
      <BranchComponent />
      <h2 class="font-bold text-2xl mb-3">Welcome back</h2>
      Start your website in seconds. Don’t have an account? Sign up.
    </div>
    <div :class="`form grid grid-flow-row ${GAP_IN_COMPONENT}`">
      <div :class="`form flex grid-cols-2 ${GAP_IN_COMPONENT}`">
        <InputComponent class="w-full">
          <span class="text-boil text-xl">email</span>
        </InputComponent>
        <InputComponent class="w-full">
          <span class="text-boil text-xl">password</span>
        </InputComponent>
      </div>
      <OrHr />
      <div :class="`login-third-party grid grid-flow-row ${GAP_IN_COMPONENT}`">
        <ButtonComponent class="w-full"
          ><font-awesome-icon :icon="['fab', 'google']" /> login by
          google</ButtonComponent
        >
        <ButtonComponent class="w-full">
          <font-awesome-icon class="text-2xl" :icon="['fab', 'apple']" />
          login by apple
        </ButtonComponent>
      </div>
      <div class="more-action flex justify-between">
        <div class="flex items-center">
          <input id="remember" type="checkbox" class="w-5 h-5" />
          <label for="remember" class="">
            <span class="ml-5 pb-4">remember me</span></label
          >
        </div>
        <div class="forgot">forgot password</div>
      </div>
      <div class="action">
        <ButtonComponent :style="'btn-primary'" class="w-full">
          Sign in to your account
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BranchComponent from "@/layouts/default/left/BranchComponent.vue";
import { InputComponent, OrHr, ButtonComponent } from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
</script>
<style scoped lang="scss"></style>