<template>
  <div class="w-full bg-gray-50 rounded-lg shadow p-4 md:p-6">
    <div class="grid grid-cols-5 gap-5">
      <div class="col-span-1">
        <img :src="src" class="w-full" />
      </div>
      <div class="d-flex flex-grow-1 flex-column col-span-4 self-center">
        <div>
          <h5 class="leading-none text-3xl font-bold text-cyan-500 pb-2">
            {{ amount }}
          </h5>
          <p class="text-base font-normal text-gray-500">
            {{ title }}
          </p>
        </div>
      </div>
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
