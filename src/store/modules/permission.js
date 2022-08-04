import { asyncRoutes, constRoutes } from "@/router"
import localCache from "@/utils/cache"
// import settings from "@/settings"
const defaultPermission = () => {
  return { routes: [], addRoutes: [] }
}

/**
 * 利用meta.role去判斷該路由適合誰訪問
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta?.roles?.includes(role))
  } else {
    // 如果沒有meta，那就是無需特定權限
    return true
  }
}

/**
 * 過濾動態路由
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = () => {
  return {
    routes: localCache.getLocal("routes") ?? [],
    addRoutes: localCache.getLocal("addRoutes") ?? []
  }
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constRoutes.concat(routes)
    state.addRoutes = routes
  },
  RESET_ALL: (state) => {
    Object.assign(state, defaultPermission())
  }
}

const actions = {
  async generateRoutesAction({ commit }, { roles }) {
    return new Promise((resolve) => {
      let accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      localCache.setLocal("routes", constRoutes.concat(accessedRoutes))
      localCache.setLocal("addRoutes", accessedRoutes)
      commit("SET_ROUTES", accessedRoutes)
      resolve(accessedRoutes)
    })
  },

  resetRoutes({ commit }) {
    return new Promise((resolve) => {
      localCache.removeLocal("routes")
      localCache.removeLocal("addRoutes")
      commit("RESET_ALL")
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
