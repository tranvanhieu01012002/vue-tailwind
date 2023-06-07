<template>
  <PaddingComponent>
    <template #title>Analyst</template>
    <template #description>Revenue and Sales</template>
    <template #right>
      <font-awesome-icon class="text-3xl" :icon="['fas', 'ellipsis-vertical']"
    /></template>
    <template #content>
      <div>
        <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
      </div>
    </template>
  </PaddingComponent>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PaddingComponent } from "@/components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
// import * as chartConfig from './chartConfig.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = ref({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Oct",
    "Dec",
  ],
  datasets: [
    {
      data: [40, 20, 12, 20, 12, 4, 1, 4, 5, 20, 56, 30],
      label: "Revenue",
      backgroundColor: "red",
    },
    {
      data: [30, 10, 5, 2, 8, 20, 13, 4, 50, 56, 4, 6],
      label: "Sale",
      backgroundColor: "blue",
    },
  ],
});
const chartOptions = ref({
  responsive: true,
});
</script>
