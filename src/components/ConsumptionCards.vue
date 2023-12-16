<template>
  <hr style="border: 2px solid rgb(0, 0, 0); margin: 3rem 0" />

  <div class="d-flex flex-column gap-3 my-4 mt-5">
    <BaseCard
      title="Total Power Consumption (kW)"
      amount="654 kW"
      :src="icon1"
    />
    <BaseCard
      title="Consumption in Kitchen (kW)"
      amount="122 kW"
      :src="icon3"
    />
    <BaseCard title="Total AC Consumption (kW)" amount="234 kW" :src="icon4" />
    <BaseCard
      title="Total Consumption Amount (AED)"
      amount="330 AED"
      color="#99B080"
      :src="icon2"
    />
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  computed: {
    icon1() {
      return new URL("../../assets/electricity.png", import.meta.url).href;
    },
    icon2() {
      return new URL("../../assets/money (1).png", import.meta.url).href;
    },
    icon3() {
      return new URL("../../assets/kitchen.png", import.meta.url).href;
    },
    icon4() {
      return new URL("../../assets/air-conditioner.png", import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped></style>
