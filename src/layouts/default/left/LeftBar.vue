<template>
  <div class="flex flex-col justify-between h-screen sticky top-0">
    <div class="top">
      <BranchComponent />
      <div class="categories nav w-full">
        <template v-for="(category, index) in listCategory" :key="index">
          <CategoryComponent
            :parent-active="data.includes(category.name)"
            :category="category"
          />
          <template
            v-for="categoryChild in category.children"
            :key="categoryChild.name"
          >
            <CategoryComponent
              class="subnav"
              :parent-active="false"
              v-if="!!category.children"
              :category="categoryChild"
            />
          </template>
        </template>
      </div>
    </div>
    <div class="bottom fixed bottom-1 pb-5 text-3xl text-gray-400">
      <div class="support">
        <font-awesome-icon :icon="['fas', 'headphones']" />
        <strong class="text-xl ml-2">Support</strong>
      </div>
      <div class="support pt-4">
        <font-awesome-icon class="gear" :icon="['fas', 'gear']" />
        <strong class="ml-2 text-xl">Setting</strong>
        <strong class="ml-2 text-xl">Support</strong>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BranchComponent from "./BranchComponent.vue";
import CategoryComponent from "./CategoryComponent.vue";
import { listCategory } from "./categories";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const data = ref("");

onMounted(() => {
  useRouter().afterEach((to) => {
    data.value = to.fullPath;
  });
});
</script>
<style scoped lang="scss">
.gear {
  transition: all 0.5s ease-in-out 0s;
}
.gear:hover {
  cursor: default;
  transform: rotate(360deg);
  transition: all 0.5s ease-in-out 0s;
}
.nav:hover .subnav {
  display: flex;
}
.subnav {
  display: none;
}
</style>
