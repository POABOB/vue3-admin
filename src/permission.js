import router, { asyncRoutes } from "@/router"
import settings from "./settings"
import store from "@/store/index.js"

// 轉址白名單，避免無限迴圈
const whiteList = ["/login", "/404"]

// 設定title
const getPageTitle = (pageTitle) => {
  const title = settings.title || "Vue3 Admin"
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
router.beforeEach(async (to, from, next) => {
  // 設定頁面title
  document.title = getPageTitle(to.meta.title)

  // // 是否需要token
  // if (!settings.isNeedLogin) setToken(settings.tmpToken)
  const hasToken = store.getters.token
  if (hasToken.length) {
    // 登入狀態訪問login，就直接跳轉"/""
    if (to.path === "/login") next({ path: "/" })
    else {
      const userInfo = store.getters.userInfo
      if (Object.values(userInfo).length !== 0) {
        next()
      } else {
        try {
          let accessRoutes = []

          if (settings.isNeedLogin) {
            const { roles } = await store.dispatch("user/getUserInfoAction")
            accessRoutes = await store.dispatch(
              "permission/generateRoutesAction",
              { roles }
            )
          } else {
            accessRoutes = asyncRoutes
          }
          accessRoutes.forEach((route) => {
            router.addRoute(route)
          })
          next({ ...to, replace: true })
        } catch (err) {
          console.log(err)
          await store.dispatch("user/resetUser")
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) next()
    else next(`/login?redirect=${to.path}`)
  }
})
