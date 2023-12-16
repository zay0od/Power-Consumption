import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./style.css";
import PrimeVue from "primevue/config";

createApp(App).use(PrimeVue).mount("#app");
