import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    name: "登入"
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue"),
    name: "後台"
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
