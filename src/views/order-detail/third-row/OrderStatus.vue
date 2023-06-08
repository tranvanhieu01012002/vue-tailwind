<template>
  <PaddingComponent>
    <template #title>Order status</template>
    <template #content>
      <ul class="order-status">
        <li class="order-content flex">
          <div class="order completion">
            <CircleIcon :icon-style="iconActive" />
          </div>
          <div class="content flex-col ml-4">
            <div class="status-name">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div class="description text-sm text-gray-400">fdsfdfsf</div>
            <div class="time">12/21/2021</div>
          </div>
        </li>
        <li class="order-content flex">
          <div class="order will"><CircleIcon :icon-style="icon" /></div>
          <div class="content flex-col ml-4">
            <div class="status-name">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div class="description text-sm text-gray-400">fdsfdfsf</div>
            <div class="time">12/21/2021</div>
          </div>
        </li>
        <li class="order-content flex">
          <div class="order will"><CircleIcon :icon-style="icon" /></div>
          <div class="content flex-col ml-4">
            <div class="status-name">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div class="description text-sm text-gray-400">fdsfdfsf</div>
            <div class="time">12/21/2021</div>
          </div>
        </li>
      </ul>
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import { PaddingComponent, CircleIcon } from "@/components";
import { CircleIcon as CircleIconType } from "@/types";
const icon: CircleIconType = {
  icon: ["fas", "money-bill"],
  borderInside: "bg-gray-400",
  borderOutside: "bg-gray-200",
  color: "text-gray-800",
};
const iconActive: CircleIconType = {
  icon: ["fas", "money-bill"],
  borderInside: "bg-violet-400",
  borderOutside: "bg-violet-200",
  color: "text-violet-800",
};
</script>
<style scoped lang="scss">
.order-content {
  .order {
    position: relative;
    &::after {
      content: "";
      width: 1px;
      display: block;
      height: 100%;
      margin-left: 22px;
      border: 1px dashed #4b3636;
    }
  }
  &:last-child .order::after {
    display: none;
  }
}

.order-content .completion {
  &::after {
    border: 1px dashed #7c18f8;
  }
}

.order-content .will {
  &::after {
    border: 1px dashed #878a89;
  }
}
</style>
