import { createApp } from "vue"
import App from "./app.vue"
{{#router}}
import router from "./router"
{{/router}}



createApp(App)
    {{#router}}
    .use(router)
    {{/router}}
    .mount("#app");