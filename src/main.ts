import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createVCodeBlock } from "@wdns/vue-code-block";

const VCodeBlock = createVCodeBlock();

const app = createApp(App);
app.use(VCodeBlock);
app.mount("#app");
