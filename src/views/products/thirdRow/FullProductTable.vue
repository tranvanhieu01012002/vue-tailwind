<template>
  <PaddingComponent>
    <template #title>recent order</template>
    <template #right>
      <div class="btn-group">
        <FilterButton />
        <ButtonComponent :style="'btn-primary'"> see more </ButtonComponent>
      </div>
    </template>
    <template #content>
      <DefaultTable :headers="headerData" />
    </template>
    <template #footer>
      <FooterTable />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import PaddingComponent from "@/views/dashboard/components/PaddingComponent.vue";
import SpanStatusComponent from "@/components/SpanStatusComponent.vue";
import DefaultTable from "@/components/table/DefaultTable.vue";
import FooterTable from "@/components/FooterTable.vue";
import { headerData } from "@/components/table/headerData";
</script>
<style scoped lang="scss"></style>
<!-- <div class="capitalize w-full mt-5">
  <div class="grid grid-cols-9 bg-gray-300">
    <div class="py-5 col-span-2">
      <label class="flex ml-5">
        <div class="input">
          <input type="checkbox" class="w-5 h-5" />
        </div>
        <div class="ml-3">product</div>
      </label>
    </div>
    <div class="py-5 uppercase">sku</div>
    <div class="py-5">category</div>
    <div class="py-5">stock</div>
    <div class="py-5">price</div>
    <div class="py-5">status</div>
    <div class="py-5">added</div>
    <div class="py-5">action</div>
  </div>
  <div class="grid grid-cols-9 odd:bg-gray-300 hover:bg-gray-400">
    <div class="py-5 col-span-2">
      <label class="flex ml-5">
        <div class="input">
          <input type="checkbox" class="w-5 h-5" />
        </div>
        <div class="ml-3">
          <div class="product-cell flex mt-2">
            <div class="img h-12 w-12">
              <img src="@/assets/img/products/Img.png" alt="" />
            </div>
            <div class="content text-sm ml-2">
              <div class="content--name">IPhone</div>
              <div class="content--sku text-gray-custom-100">
                SKU:300032
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
    <div class="py-2">
      <span class="text-sky-400">4034</span>
    </div>
    <div class="py-5 text-gray-custom-100">
      <div class="">Watch</div>
    </div>
    <div class="pt-3 text-gray-custom-100">
      <div class="category-row">10</div>
    </div>
    <div class="py-5 text-gray-custom-100">$ 435</div>
    <div class="py-5 text-gray-custom-100">
      <SpanStatusComponent>Delivery</SpanStatusComponent>
    </div>
    <div class="py-5 text-gray-custom-100">29 Jul 2023</div>
    <div class="py-5 text-gray-custom-100 text-2xl">
      <font-awesome-icon class="mr-3 last:mr-0" :icon="['fas', 'eye']" />
      <font-awesome-icon
        class="mr-3 last:mr-0"
        :icon="['fas', 'pencil']"
      />
      <font-awesome-icon
        class="mr-3 last:mr-0"
        :icon="['fas', 'trash']"
      />
    </div>
  </div>
  <div class="grid grid-cols-9 odd:bg-gray-300 hover:bg-gray-400">
    <div class="py-5 col-span-2">
      <label class="flex ml-5">
        <div class="input">
          <input type="checkbox" class="w-5 h-5" />
        </div>
        <div class="ml-3">
          <div class="product-cell flex">
            <div class="img h-12 w-12">
              <img src="@/assets/img/products/Img.png" alt="" />
            </div>
            <div class="content text-sm ml-2">
              <div class="content--name">IPhone</div>
              <div class="content--sku text-gray-custom-100">
                SKU:300032
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
    <div class="py-2">
      <span class="text-sky-400">4034</span>
    </div>
    <div class="py-5 text-gray-custom-100">
      <div class="">Watch</div>
    </div>
    <div class="pt-3 text-gray-custom-100">10</div>
    <div class="py-5 text-gray-custom-100">$ 435</div>
    <div class="py-5 text-gray-custom-100">
      <SpanStatusComponent>Delivery</SpanStatusComponent>
    </div>
    <div class="py-5 text-gray-custom-100">29 Jul 2023</div>
    <div class="py-5 text-gray-custom-100 text-2xl">
      <font-awesome-icon class="mr-3 last:mr-0" :icon="['fas', 'eye']" />
      <font-awesome-icon
        class="mr-3 last:mr-0"
        :icon="['fas', 'pencil']"
      />
      <font-awesome-icon
        class="mr-3 last:mr-0"
        :icon="['fas', 'trash']"
      />
    </div>
  </div>
  <div class="grid grid-cols-9 odd:bg-gray-300 hover:bg-gray-400">
    <div class="py-5 col-span-2">
      <label class="flex ml-5">
        <div class="input">
          <input type="checkbox" class="w-5 h-5" />
        </div>
        <div class="ml-3">
          <div class="product-cell flex mt-2">
            <div class="img h-12 w-12">
              <img src="@/assets/img/products/Img.png" alt="" />
            </div>
            <div class="content text-sm ml-2">
              <div class="content--name">IPhone</div>
              <div class="content--sku text-gray-custom-100">
                SKU:300032
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
    <div class="py-2">
      <span class="text-sky-400">4034</span>
    </div>
    <div class="py-5 text-gray-custom-100">
      <div class="">Watch</div>
    </div>
    <div class="pt-3 text-gray-custom-100">
      <div class="category-row">10</div>
    </div>
    <div class="py-5 text-gray-custom-100">$ 435</div>
    <div class="py-5 text-gray-custom-100">
      <SpanStatusComponent>Delivery</SpanStatusComponent>
    </div>
    <div class="py-5 text-gray-custom-100">29 Jul 2023</div>
    <div class="py-5 text-gray-custom-100 text-2xl">
      <font-awesome-icon class="mr-3 last:mr-0" :icon="['fas', 'eye']" />
      <font-awesome-icon
        class="mr-3 last:mr-0"
        :icon="['fas', 'pencil']"
      />
      <font-awesome-icon
        class="mr-3 last:mr-0"
        :icon="['fas', 'trash']"
      />
    </div>
  </div>
</div> -->
