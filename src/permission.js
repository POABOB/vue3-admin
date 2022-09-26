import router from "@/router"
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

  // 是否需要登入，展示模式就不需要這個
  if (to.path !== "/login" && !settings.isNeedLogin)
    await store.dispatch("user/setTokenAction", settings.tmpToken)

  const hasToken = store.getters.token
  if (hasToken.length) {
    // 登入狀態訪問login，就直接跳轉"/""
    if (to.path === "/login") next({ path: "/" })
    else {
      let userInfo = store.getters.userInfo
      if (Object.values(userInfo).length) {
        next()
      } else {
        try {
          let accessRoutes = []

          // 用來切換roles
          let tmpRoles = settings.tmpUserInfo.roles
          const storeRoles = store.getters.roles
          if (storeRoles.length) tmpRoles = storeRoles
          settings.tmpUserInfo.roles = tmpRoles

          if (settings.isNeedLogin)
            userInfo = await store.dispatch("user/getUserInfoAction")
          else {
            userInfo = await store.dispatch("user/setUserInfoAction", {
              userInfo: settings.tmpUserInfo,
              roles: settings.tmpUserInfo.roles
            })
          }

          const { roles } = userInfo
          accessRoutes = await store.dispatch(
            "permission/generateRoutesAction",
            { roles }
          )
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
