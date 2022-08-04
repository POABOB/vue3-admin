import Layout from "@/layout"
const permissionRoutes = {
  path: "/permission",
  redirect: "/permission/all",
  component: Layout,
  meta: { title: "權限控制", icon: "Setting", roles: ["admin", "editor"] },
  children: [
    {
      path: "/permission/all",
      component: () => import("@/views/permission"),
      meta: {
        title: "全部權限",
        roles: ["admin", "editor"]
      }
    },
    {
      path: "/mpermission/admin",
      component: () => import("@/views/permission"),
      meta: {
        title: "ADMIN權限",
        roles: ["admin"]
      }
    },
    {
      path: "/permission/editor",
      component: () => import("@/views/permission"),
      meta: {
        title: "EDITOR權限",
        roles: ["editor"]
      }
    }
  ]
}

export default permissionRoutes
