import Layout from "@/layout"
const permissionRoutes = {
  path: "/permission",
  redirect: "/permission/all",
  component: Layout,
  meta: { title: "權限控制", icon: "Setting", roles: ["admin", "editor"] },
  children: [
    {
      path: "/permission/all",
      name: "Permission_All",
      component: () => import("@/views/permission"),
      meta: {
        title: "全部權限",
        roles: ["admin", "editor"]
      }
    },
    {
      path: "/permission/admin",
      name: "Permission_Admin",
      component: () => import("@/views/permission/Dynamic.vue"),
      meta: {
        title: "ADMIN權限",
        roles: ["admin"]
      }
    },
    {
      path: "/permission/editor",
      name: "Permission_Editor",
      component: () => import("@/views/permission/Dynamic.vue"),
      meta: {
        title: "EDITOR權限",
        roles: ["editor"]
      }
    }
  ]
}

export default permissionRoutes
