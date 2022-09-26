import Layout from "@/layout"
const storyRoutes = {
  path: "/story",
  component: Layout,
  children: [
    {
      path: "",
      name: "Story",
      meta: {
        title: "作品集",
        icon: "ChatDotSquare",
        roles: ["admin", "editor"]
      },
      component: () => import("@/views/story")
    }
  ]
}

export default storyRoutes
