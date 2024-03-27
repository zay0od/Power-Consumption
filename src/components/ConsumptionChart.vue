<template>
  <div class="w-full bg-gray-50 rounded-lg shadow p-4 md:p-6">
    <div class="flex justify-between">
      <div>
        <h5 class="leading-none text-3xl font-bold text-cyan-500 pb-2">2020</h5>
        <p class="text-base font-normal text-gray-500">
          Power Consumption (kW)
        </p>
      </div>
      <div
        class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 text-center"
      >
        12%
        <svg
          class="w-3 h-3 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13V1m0 0L1 5m4-4 4 4"
          />
        </svg>
      </div>
    </div>
    <div>
      <Line
        class="w-100"
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
  </div>
</template>

<script>
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import datasets from "../data/dataset";
export default {
  name: "chart",
  components: { Line },

  data() {
    return {
      chartOptions: {},
    };
  },
  computed: {
    chartData() {
      const keys = Object.keys(datasets);
      let data = {
        labels: [],
        points: [],
      };

      keys.forEach((key) => {
        const currentPoint = datasets[key];

        data?.labels.push(key);
        data?.points.push(currentPoint["total_active_power_kW"] * 100);
      });

      return {
        labels: [...data?.labels],
        datasets: [
          {
            label: "Total Active Power kW",
            // backgroundColor: "#f87979",
            data: [...data?.points],
            fill: false,
            borderColor: "rgb(90, 170, 203)",
            tension: 0.1,
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
