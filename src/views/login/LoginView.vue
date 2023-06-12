<template>
  <div class="bg-white p-5 rounded-md grid grid-flow-row gap-10">
    <div class="branch">
      <BranchComponent />
      <h2 class="font-bold text-2xl mb-3">Welcome back</h2>
      Start your website in seconds. Don’t have an account? Sign up.
    </div>
    <form
      @submit="click"
      :class="`form grid grid-flow-row ${GAP_IN_COMPONENT}`"
    >
      <div :class="`form flex grid-cols-2 ${GAP_IN_COMPONENT}`">
        <InputComponent
          class="w-full"
          :value="email"
          @type="(value) => (email = value)"
        >
          <span class="text-boil text-xl">email</span>
        </InputComponent>
        <InputComponent
          :value="password"
          :type="showPassword ? InputType.TEXT : InputType.PASSWORD"
          @icon-click="activePassword"
          class="w-full"
          :icon="showPassword ? 'eye' : 'eye-slash'"
          @type="(value) => (password = value)"
        >
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
        <ButtonComponent
          :type="ButtonType.SUBMIT"
          :style="'btn-primary'"
          class="w-full"
        >
          Sign in to your account
        </ButtonComponent>
      </div>
    </form>
    <FullScreenLoading />
  </div>
</template>
<script setup lang="ts">
import BranchComponent from "@/layouts/default/left/BranchComponent.vue";
import {
  InputComponent,
  OrHr,
  ButtonComponent,
  FullScreenLoading,
} from "@/components";
import { GAP_IN_COMPONENT } from "@/constants";
import { InputType, ButtonType, ResponseStatus, ToastStatus } from "@/enums";
import { ref } from "vue";
import { api } from "@/api";
import { useNotification, useToken } from "@/hooks";
import router from "@/router";

const { notify } = useNotification();
const showPassword = ref(false);
const email = ref("");
const password = ref("");
const { setToken } = useToken();

const activePassword = () => {
  showPassword.value = !showPassword.value;
};

const click = async (e: Event) => {
  e.preventDefault();
  if (email.value == "" && password.value == "") {
    notify("Opp please input data", ToastStatus.ERROR);
  } else {
    await handleData();
  }
};

const sendInfo = async () => {
  return await api.post("login", {
    email: email.value,
    password: password.value,
  });
};

const resetField = () => {
  email.value = "";
  password.value = "";
};

const handleData = async () => {
  const { data } = await sendInfo();
  if (data.status === ResponseStatus.SUCCESS) {
    setToken(data.data.token);
    router.push({ name: "dashboard" });
  } else {
    resetField();
    notify(data.message, ToastStatus.ERROR);
  }
};
</script>
<style scoped lang="scss"></style>
