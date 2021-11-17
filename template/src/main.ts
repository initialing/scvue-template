import { createApp } from "vue"
import App from "./app.vue"
import router from "./router"



console.log(router);
createApp(App).use(router).mount("#app");