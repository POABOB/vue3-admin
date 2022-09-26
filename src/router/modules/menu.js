import Layout from "@/layout"
const menuRoutes = {
  path: "/menu",
  redirect: "/menu/1",
  component: Layout,
  meta: { title: "路由嵌套", icon: "Postcard" },
  children: [
    {
      path: "/menu/1",
      name: "Menu1",
      component: () => import("@/views/menu"),
      meta: { title: "菜單1" }
    },
    {
      path: "/menu/2",
      name: "Menu2",
      component: () => import("@/views/menu"),
      meta: { title: "菜單2" }
    },
    {
      path: "/menu/3",
      component: () => import("@/views/menu"),
      meta: { title: "菜單3" },
      redirect: "/menu/3/1",
      children: [
        {
          path: "/menu/3/1",
          name: "Menu3-1",
          component: () => import("@/views/menu"),
          meta: { title: "菜單3-1" }
        },
        {
          path: "/menu/3/2",
          name: "Menu3-2",
          component: () => import("@/views/menu"),
          meta: { title: "菜單3-2" }
        }
      ]
    }
  ]
}

export default menuRoutes
