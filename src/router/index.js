import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/layout/Layout.vue"

import menuRoutes from "./modules/menu"
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
        name: "Dashboard",
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
        name: "CRUD",
        component: () => import("@/views/CRUD"),
        meta: { title: "CRUD", icon: "List" }
      }
    ]
  },

  {
    path: "/ck-editor",
    component: Layout,
    children: [
      {
        path: "",
        name: "CKEditor",
        component: () => import("@/views/CkEditor"),
        meta: { title: "CKEditor 5", icon: "EditPen" }
      }
    ]
  },

  menuRoutes,

  {
    path: "/external-link",
    children: [
      {
        path: "https://poabob.github.io",
        meta: { title: "部落格", icon: "Share" }
      }
    ]
  },

  storyRoutes
]

export const asyncRoutes = [
  permissionRoutes,
  { path: "/:pathMatch(.*)*", redirect: "/404", hidden: true }
]

const router = createRouter({
  routes: constRoutes,
  history: createWebHistory()
})

export default router
