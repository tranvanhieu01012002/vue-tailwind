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
      <div class="capitalize w-full mt-5">
        <div class="grid grid-cols-10 bg-gray-300">
          <div class="py-5">
            <label class="flex ml-5">
              <div class="input">
                <input type="checkbox" class="w-5 h-5" />
              </div>
              <div class="ml-3">order ID</div>
            </label>
          </div>
          <div class="col-span-2 py-5">product</div>
          <div class="py-5">date</div>
          <div class="col-span-2 py-5">customer</div>
          <div class="py-5">total</div>
          <div class="py-5">payment</div>
          <div class="py-5">status</div>
          <div class="py-5">action</div>
        </div>
        <div class="grid grid-cols-10 odd:bg-gray-300 hover:bg-gray-400">
          <div class="py-5">
            <label class="flex ml-5">
              <div class="input">
                <input type="checkbox" class="w-5 h-5" />
              </div>
              <div class="ml-3">
                <span class="text-blue-500"> #43423</span>
              </div>
            </label>
          </div>
          <div class="py-2 col-span-2">
            <div class="product-cell flex mt-2">
              <div class="img h-12 w-12">
                <img src="@/assets/img/products/Img.png" alt="" />
              </div>
              <div class="content text-sm ml-2">
                <div class="content--name">IPhone</div>
                <div class="content--sku text-gray-custom-100">SKU:300032</div>
              </div>
            </div>
          </div>
          <div class="py-5 text-gray-custom-100">
            <div class="">2 minutes</div>
          </div>
          <div class="pt-3 text-gray-custom-100 col-span-2">
            <div class="customer">
              <strong>Join Abc</strong>
            </div>
            <small class="text-gray-custom-100">abc@gmail.com</small>
          </div>
          <div class="py-5 text-gray-custom-100">2 minutes</div>
          <div class="py-5 text-gray-custom-100">2 minutes</div>
          <div class="py-5 text-gray-custom-100">
            <SpanStatusComponent>Delivery</SpanStatusComponent>
          </div>
          <div class="py-5 text-gray-custom-100">
            <font-awesome-icon class="h-6 w-6 mr-3" :icon="['fas', 'eye']" />
            <font-awesome-icon class="h-6 w-6" :icon="['fas', 'pencil']" />
          </div>
        </div>
        <div class="grid grid-cols-10 odd:bg-gray-300 hover:bg-gray-400">
          <div class="py-5">
            <label class="flex ml-5">
              <div class="input">
                <input type="checkbox" class="w-5 h-5" />
              </div>
              <div class="ml-3">
                <span class="text-blue-500"> #43423</span>
              </div>
            </label>
          </div>
          <div class="py-2 col-span-2">
            <div class="product-cell flex mt-2">
              <div class="img h-12 w-12">
                <img src="@/assets/img/products/Img.png" alt="" />
              </div>
              <div class="content text-sm ml-2">
                <div class="content--name">IPhone</div>
                <div class="content--sku text-gray-custom-100">SKU:300032</div>
              </div>
            </div>
          </div>
          <div class="py-5 text-gray-custom-100">
            <div class="">2 minutes</div>
          </div>
          <div class="pt-3 text-gray-custom-100 col-span-2">
            <div class="customer">
              <strong>Join Abc</strong>
            </div>
            <small class="text-gray-custom-100">abc@gmail.com</small>
          </div>
          <div class="py-5 text-gray-custom-100">2 minutes</div>
          <div class="py-5 text-gray-custom-100">2 minutes</div>
          <div class="py-5 text-gray-custom-100">
            <SpanStatusComponent>Delivery</SpanStatusComponent>
          </div>
          <div class="py-5 text-gray-custom-100">
            <font-awesome-icon class="h-6 w-6 mr-3" :icon="['fas', 'eye']" />
            <font-awesome-icon class="h-6 w-6" :icon="['fas', 'pencil']" />
          </div>
        </div>
        <div class="grid grid-cols-10 odd:bg-gray-300 hover:bg-gray-400">
          <div class="py-5">
            <label class="flex ml-5">
              <div class="input">
                <input type="checkbox" class="w-5 h-5" />
              </div>
              <div class="ml-3">
                <span class="text-blue-500"> #43423</span>
              </div>
            </label>
          </div>
          <div class="py-2 col-span-2">
            <div class="product-cell flex mt-2">
              <div class="img h-12 w-12">
                <img src="@/assets/img/products/Img.png" alt="" />
              </div>
              <div class="content text-sm ml-2">
                <div class="content--name">IPhone</div>
                <div class="content--sku text-gray-custom-100">SKU:300032</div>
              </div>
            </div>
          </div>
          <div class="py-5 text-gray-custom-100">
            <div class="">2 minutes</div>
          </div>
          <div class="pt-3 text-gray-custom-100 col-span-2">
            <div class="customer">
              <strong>Join Abc</strong>
            </div>
            <small class="text-gray-custom-100">abc@gmail.com</small>
          </div>
          <div class="py-5 text-gray-custom-100">2 minutes</div>
          <div class="py-5 text-gray-custom-100">2 minutes</div>
          <div class="py-5 text-gray-custom-100">
            <SpanStatusComponent>Delivery</SpanStatusComponent>
          </div>
          <div class="py-5 text-gray-custom-100">
            <font-awesome-icon class="h-6 w-6 mr-3" :icon="['fas', 'eye']" />
            <font-awesome-icon class="h-6 w-6" :icon="['fas', 'pencil']" />
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <FooterTable />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import PaddingComponent from "../components/PaddingComponent.vue";
import FilterButton from "../../../components/button/FilterButton.vue";
import FooterTable from "@/components/FooterTable.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import SpanStatusComponent from "@/components/SpanStatusComponent.vue";
</script>
<style scoped lang="scss"></style>
<!-- <div class="table capitalize w-full mt-5">
  <div class="table-header-group">
    <div class="table-row bg-gray-300">
      <div class="table-cell py-5 pl-5">
        <label class="flex">
          <div class="input">
            <input type="checkbox" class="w-5 h-5" />
          </div>
          <div class="ml-3">order ID</div>
        </label>
      </div>
      <div class="table-cell py-5 border-b-red-500">product</div>
      <div class="table-cell py-5">date</div>
      <div class="table-cell py-5">customer</div>
      <div class="table-cell py-5">total</div>
      <div class="table-cell py-5">payment</div>
      <div class="table-cell py-5">status</div>
      <div class="table-cell py-5">action</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row py-4">
      <div class="table-cell pl-5">
        <label class="flex">
          <div class="input">
            <input type="checkbox" class="w-5 h-5" />
          </div>
          <div class="ml-3">
            <span class="text-blue-500"> #43423</span>
          </div>
        </label>
      </div>
      <div class="table-cell">
        <div class="product-cell flex mt-2">
          <div class="img h-8 w-8">
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
      <div class="table-cell text-gray-custom-100">2 minutes</div>
      <div class="table-cell">
        <div class="customer">
          <strong>Join Abc</strong>
        </div>
        <small class="text-gray-custom-100">abc@gmail.com</small>
      </div>
      <div class="table-cell">2</div>
      <div class="table-cell">2</div>
      <div class="table-cell">
        <SpanStatusComponent>delivery</SpanStatusComponent>
      </div>
      <div class="table-cell">
        <font-awesome-icon class="h-6 w-6 mr-3" :icon="['fas', 'eye']" />
        <font-awesome-icon class="h-6 w-6" :icon="['fas', 'pencil']" />
      </div>
    </div>
  </div>
</div> -->
