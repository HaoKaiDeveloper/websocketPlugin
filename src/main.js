import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { webSocketPlugin } from "./plugin/websocketPlugin";
const app = createApp(App);
const pinia = createPinia();
pinia.use(webSocketPlugin("ws://localhost:3000/"));

app.use(pinia);

app.mount("#app");
