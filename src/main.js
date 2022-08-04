import { createApp } from "vue"
import App from "./App.vue"

import "normalize.css"
import "@/assets/css/index.less"

// 使用路由和Vuex
import router from "./router"
import store from "./store"

// 全局引入ElementPlus
// app.use(ElementPlus)
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
import { globalRegister } from "./global"
// import "./global"

// API範例
// import service from "./service"
// service
//   .get({
//     // //不顯示LOADING
//     // showLoading: false,
//     // // 單個URL的客製化攔截器(少用)
//     // interceptors: {
//     //   requestInterceptor: (config) => {
//     //     return config
//     //   }
//     // },
//     url: "/home/multidata",
//     method: "GET"
//   })
//   .then((res) => {
//     console.log(res)
//   })
import "../mock"
import "@/permission"

createApp(App).use(store).use(globalRegister).use(router).mount("#app")
