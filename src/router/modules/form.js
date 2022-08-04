import Layout from "@/layout"
const formRoutes = {
  path: "/form",
  redirect: "/form/basic",
  component: Layout,
  meta: { title: "表單範例", icon: "Postcard" },
  children: [
    {
      path: "basic",
      component: () => import("@/views/form"),
      meta: { title: "基本表單" }
    },
    {
      path: "advance",
      component: () => import("@/views/form"),
      meta: { title: "進階表單" }
    },
    {
      path: "steps",
      component: () => import("@/views/form"),
      meta: { title: "階段表單" },
      redirect: "/form/steps/1",
      children: [
        {
          path: "1",
          component: () => import("@/views/form"),
          meta: { title: "階段表單1" }
        },
        {
          path: "2",
          component: () => import("@/views/form"),
          meta: { title: "階段表單2" }
        }
      ]
    }
  ]
}

export default formRoutes
