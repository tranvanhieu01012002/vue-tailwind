<template>
  <PaddingComponent>
    <template #title>Sale Progress</template>
    <template #description>This quarter</template>
    <template #content>
      <div class="flex flex-col h-90">
        <div class="flex justify-center">
          <PerCircle
            :progress="60"
            :text-layout="'text-sm font-bold'"
            :decimal-precision="2"
            :radius="75"
            :container-width="'w-40'"
            :container-height="'h-40'"
            :cx="80"
            :cy="80"
            :progress-cx="80"
            :progress-cy="80"
            :progress-thickness="40"
            :progress-radius="80"
            :progressColor="'text-violet-400'"
          />
        </div>
        <div class="my-5">
          <p class="text-gray-custom-100 text">
            You succeed earn <strong>$240</strong> today, its higher than
            yesterday
          </p>
        </div>
        <div class="text-money">
          <div class="flex justify-between">
            <TextMoney :price="300" :status="'up'">Target</TextMoney>
            <TextMoney :price="4234" :status="'down'">Target</TextMoney>
            <TextMoney :price="1111" :status="'up'">Target</TextMoney>
          </div>
        </div>
      </div>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import PaddingComponent from "../components/PaddingComponent.vue";
import PerCircle from "./PerCircle.vue";
import TextMoney from "./TextMoney.vue";
</script>
<style scoped lang="scss">
.text {
  font-size: 20px;
}
</style>
