<template>
  <PaddingComponent>
    <template #title>Top selling product</template>
    <template #right></template><FilterButton />
    <template #content>
      <div class="w-full pt-5">
        <table class="w-full">
          <thead class="text-white bg-gray-300">
            <tr>
              <th class="py-4 w-40">
                <span>product</span>
              </th>
              <th>sales</th>
              <th>amount</th>
              <th>price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="even:bg-gray-300 hover:bg-gray-400">
              <td>
                <div class=""><ProductCell /></div>
              </td>
              <td class="pb-3">2</td>
              <td>2</td>
              <td>2</td>
              <td class="w-20">
                <SpanStatusComponent :bg="SpanStatus.SUCCESS"
                  >Publish</SpanStatusComponent
                >
              </td>
            </tr>
            <tr class="even:bg-gray-300 hover:bg-gray-400">
              <td>
                <div class=""><ProductCell /></div>
              </td>
              <td class="pb-3">2</td>
              <td>2</td>
              <td>2</td>
              <td class="w-20">
                <SpanStatusComponent :bg="SpanStatus.CANCEL"
                  ><small>Cancel</small></SpanStatusComponent
                >
              </td>
            </tr>
            <tr class="even:bg-gray-300 hover:bg-gray-400">
              <td>
                <div class=""><ProductCell /></div>
              </td>
              <td class="pb-3">2</td>
              <td>2</td>
              <td>2</td>
              <td class="w-20">
                <SpanStatusComponent :bg="SpanStatus.SUCCESS"
                  >Publish</SpanStatusComponent
                >
              </td>
            </tr>
            <tr class="even:bg-gray-300 hover:bg-gray-400">
              <td>
                <div class=""><ProductCell /></div>
              </td>
              <td class="pb-3">2</td>
              <td>2</td>
              <td>2</td>
              <td class="w-20">
                <SpanStatusComponent :bg="SpanStatus.SHIP"
                  ><small>Ship</small></SpanStatusComponent
                >
              </td>
            </tr>
            <tr class="even:bg-gray-300 hover:bg-gray-400">
              <td>
                <div class=""><ProductCell /></div>
              </td>
              <td class="pb-3">2</td>
              <td>2</td>
              <td>2</td>
              <td class="w-20">
                <SpanStatusComponent :bg="SpanStatus.SUCCESS"
                  >Publish</SpanStatusComponent
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template #footer>
      <FooterTable />
    </template>
  </PaddingComponent>
</template>
<script setup lang="ts">
import PaddingComponent from "../components/PaddingComponent.vue";
import ProductCell from "./components/ProductCell.vue";
import SpanStatusComponent from "@/components/SpanStatusComponent.vue";
import FooterTable from "@/components/FooterTable.vue";
import FilterButton from "@/components/button/FilterButton.vue";
import { SpanStatus } from "@/enums";
</script>
<style scoped lang="scss">
thead {
  text-transform: capitalize;
}
table {
  text-align: center;

  border-collapse: collapse;

  margin: auto;

  font-size: 20px;
}
</style>
