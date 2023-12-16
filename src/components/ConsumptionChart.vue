<template>
  <div class="">
    <h3>2020 Power Consumption (kW)</h3>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
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
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
