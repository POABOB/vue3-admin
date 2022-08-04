import Layout from "@/layout"
const storyRoutes = {
  path: "/story",
  redirect: "/story/chat",
  component: Layout,
  meta: {
    title: "心情小語",
    icon: "ChatDotSquare",
    roles: ["admin", "editor"]
  },
  children: [
    {
      path: "/story/chat",
      component: () => import("@/views/story"),
      meta: { title: "我的故事" }
    },
    {
      path: "/story/list",
      component: () => import("@/views/story"),
      meta: { title: "故事列表" }
    }
  ]
}

export default storyRoutes
