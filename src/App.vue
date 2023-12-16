<template>
  <div class="main-ss p-2">
    <div class="user-info" style="margin-bottom: 6rem">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <small><small>Welcome</small></small>
          <h2>Zayed</h2>
        </div>

        <div>
          <small><small>E wallet</small></small>
          <h5>100 Points</h5>
        </div>
      </div>

      <hr style="border: 2px solid rgb(0, 0, 0); margin: 2rem 0" />
      <ConsumptionChart />
      <ConsumptionCards />
    </div>

    <!-- Business Plan Idea -->
    <hr style="border: 2px solid rgb(0, 0, 0); margin: 3rem 0" />
    <div class="chat">
      <h2>Ask AI 🤖</h2>
      <div
        @click="fetchData"
        class="button d-flex justify-content-center align-items-center my-4"
      >
        {{ loading ? "Loading..." : "How to Reduce AC Energy Consumption 🚀" }}
      </div>

      <div class="anwser text-center w-100" v-if="marketingRes">
        {{ marketingRes }}
      </div>
    </div>
  </div>
</template>

<script setup>
import ConsumptionCards from "./components/ConsumptionCards.vue";
import ConsumptionChart from "./components/ConsumptionChart.vue";
import { ref } from "vue";
import axios from "axios";

//Axios instance
const http = axios.create({
  baseURL: "https://api.openai.com/v1/chat",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
    "OpenAI-Organization": import.meta.env.VITE_ORG_ID,
  },
});
const btnStatusCounter = ref(0);
const marketingRes = ref("");
const loading = ref(false);

//functions
function getPowerInfo() {
  loading.value = true;

  const reducedUserData = {
    2020: {
      "01": {
        act_pwr: 1.55,
        voltage: 240.9,
        current: 6.55,
        kitchen: 1.26,
        laundry: 1.78,
        ac: 7.38,
        water_heater: 7.38,
      },
      "02": {
        act_pwr: 1.4,
        voltage: 240.5,
        current: 5.91,
        kitchen: 1.18,
        laundry: 1.6,
        ac: 6.7,
        water_heater: 6.7,
      },
      "03": {
        act_pwr: 1.32,
        voltage: 240.5,
        current: 5.57,
        kitchen: 1.36,
        laundry: 2.35,
        ac: 6.5,
        water_heater: 6.5,
      },
      "04": {
        act_pwr: 0.89,
        voltage: 239.4,
        current: 3.83,
        kitchen: 1.07,
        laundry: 0.97,
        ac: 4.8,
        water_heater: 4.8,
      },
      "05": {
        act_pwr: 0.99,
        voltage: 235.2,
        current: 4.3,
        kitchen: 1.7,
        laundry: 1.62,
        ac: 5.14,
        water_heater: 5.14,
      },
      "06": {
        act_pwr: 0.83,
        voltage: 238.9,
        current: 3.6,
        kitchen: 1.38,
        laundry: 1.62,
        ac: 4.38,
        water_heater: 4.38,
      },
      "07": {
        act_pwr: 0.67,
        voltage: 237.7,
        current: 2.94,
        kitchen: 0.97,
        laundry: 1.25,
        ac: 3.48,
        water_heater: 3.48,
      },
      "08": {
        act_pwr: 0.76,
        voltage: 237.9,
        current: 3.31,
        kitchen: 0.81,
        laundry: 1.11,
        ac: 5.05,
        water_heater: 5.05,
      },
      "09": {
        act_pwr: 0.97,
        voltage: 239.4,
        current: 4.22,
        kitchen: 1.21,
        laundry: 1.58,
        ac: 4.5,
        water_heater: 4.5,
      },
      10: {
        act_pwr: 1.32,
        voltage: 241,
        current: 5.6,
        kitchen: 1.51,
        laundry: 2.42,
        ac: 6.97,
        water_heater: 6.97,
      },
      11: {
        act_pwr: 1.48,
        voltage: 241.6,
        current: 6.23,
        kitchen: 1.39,
        laundry: 1.77,
        ac: 7.23,
        water_heater: 7.23,
      },
      12: {
        act_pwr: 1.53,
        voltage: 241,
        current: 6.49,
        kitchen: 1.3,
        laundry: 2.08,
        ac: 7.2,
        water_heater: 7.2,
      },
    },
  };

  http
    .post("/completions", {
      model: "gpt-3.5-turbo", //specify the model
      messages: [
        //list down your prompts here
        {
          role: "user", //"system" (to set GPT personality Tone), "user" (Input), or "assistant" (store previous assistant responses))
          content: ` Based on the client's monthly energy consumption data, identify practical, no-cost strategies to reduce their air conditioning (AC) usage. Consider patterns and fluctuations in consumption, particularly focusing on periods of higher usage. Provide these insights in a concise, bullet-point format seperated, referencing specific months and potential savings percentages.
          Data: "${JSON.stringify(reducedUserData)}".
          `,
        },
      ],
      temperature: 0.7, //randomness, lower the value the more accurate the result will be
    })
    .then(function (response) {
      console.log(response);
      marketingRes.value = response.data.choices[0].message.content;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      btnStatusCounter.value += 1;
      loading.value = false;
    });
}

function fetchData() {
  getPowerInfo();
}
</script>

<style>
h1 {
  margin-bottom: 64px;
}
.input {
  width: calc(100% - 20px);
  height: 32px;
  padding: 12px;
  border: none;
  border-radius: 16px;
  box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
  outline: none;
  font-size: 16px;
}

.input:invalid {
  animation: justshake 0.3s forwards;
  color: red;
}

@keyframes justshake {
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }

  75% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX-(5px);
  }
}

button {
  cursor: pointer;
  height: 32px;
  font-size: 16px;
  margin-top: 24px;
  background: royalblue;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

.card {
  background: #07182e;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 16px;
  margin: 24px 0;
}

.card {
  margin-top: 32px;
}

.card span,
.card pre {
  z-index: 1;
  color: white;
  font-size: 16px;
}

.card::before {
  content: "";
  position: absolute;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgb(0, 183, 255),
    rgb(255, 48, 255)
  );
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

.card::after {
  content: "";
  position: absolute;
  background: #07182e;
  inset: 5px;
  border-radius: 16px;
}
.button-block {
  display: flex;
  align-items: center;
  justify-content: end;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 8rem;
  max-width: 13rem;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
}

#container-stars {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

strong {
  z-index: 2;
  font-size: 16px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}

.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.btn:hover #container-stars {
  z-index: 1;
  background-color: #212121;
}

.btn:hover {
  transform: scale(1.1);
}

.btn:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.btn:active .circle {
  background: #fe53bb;
}

#stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#stars::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
}

#stars::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

#stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
}

#stars::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.user-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.precentage {
  margin-top: 3rem;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.precentage h2 {
  font-size: 2.3rem;
  width: 40%;
}
.main-ss {
  background-color: #f6f1ee;
  border-radius: 20px;
}
.button {
  background-color: #748e63;
  border-radius: 20px;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
}
</style>
