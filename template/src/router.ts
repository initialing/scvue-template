import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import HelloWord from "./pages/HelloWord.vue"


const route:Array<RouteRecordRaw> =[
    {
        path: "/",
        component: HelloWord
    }
]


export default createRouter({
    history: createWebHistory(),
    routes: route
})