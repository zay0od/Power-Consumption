<template>
  <div
    class="p-2 py-3 card-ss d-flex justify-content-between align-items-center"
  >
    <img :src="src" width="35" class="mx-3" />
    <div class="ps-4 d-flex flex-grow-1 flex-column">
      <h6>{{ title }}</h6>
      <h5>{{ amount }}</h5>
    </div>
  </div>
</template>

<script>
import Card from "primevue/card";

export default {
  components: { Card },
  props: ["title", "amount", "src"],
};
</script>

<style>
.card-ss {
  border-radius: 20px !important;
  background-color: #f3f0ca;
}
</style>
