import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/layout/Layout.vue"

import formRoutes from "./modules/form"
import permissionRoutes from "./modules/permission"
import storyRoutes from "./modules/story"

export const constRoutes = [
  { path: "/", redirect: "/dashboard", hidden: true },
  {
    path: "/login",
    component: () => import("@/views/login"),
    meta: { title: "登入" },
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/error/404"),
    meta: { title: "404" },
    hidden: true
  },
  {
    path: "/403",
    component: () => import("@/views/error/403"),
    meta: { title: "403" },
    hidden: true
  },

  {
    path: "/dashboard",
    component: Layout,
    children: [
      {
        path: "",
        meta: { title: "系統總覽", icon: "Monitor" },
        component: () => import("@/views/dashboard")
      }
    ]
  },

  {
    path: "/CRUD",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/CRUD"),
        meta: { title: "CRUD", icon: "List" }
      }
    ]
  },

  formRoutes,

  {
    path: "/external-link",
    children: [
      {
        path: "https://poabob.github.io",
        meta: { title: "外部連結", icon: "Share" }
      }
    ]
  },

  { path: "/:pathMatch(.*)*", redirect: "/404", hidden: true }
]

export const asyncRoutes = [storyRoutes, permissionRoutes]

const router = createRouter({
  routes: constRoutes,
  history: createWebHashHistory()
})

export default router
