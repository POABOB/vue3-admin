import router, { asyncRoutes } from "@/router"
import localCache from "@/utils/cache"
import {
  requestLogin,
  // requestUserInfoById,
  requestUserInfoByToken
  // requestUserMenuById
} from "@/service/api/user"
// import { superUser } from "@/router/roles/superUser"

const defaultUser = () => {
  return { token: "", userInfo: {} }
}

const resetRouter = () => {
  const asyncRouterNameArr = asyncRoutes.map((menuItem) => menuItem.name)
  asyncRouterNameArr.forEach((name) => {
    if (router.hasRoute(name)) {
      router.removeRoute(name)
    }
  })
}

const state = () => {
  return {
    token: localCache.get("token") ?? "",
    userInfo: {}
  }
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  RESET_ALL: (state) => {
    Object.assign(state, defaultUser())
  }
}

const actions = {
  async loginAction({ commit }, payload) {
    // 1. 登入
    const loginResult = await requestLogin(payload)
    localCache.set("token", loginResult.token)
    await commit("SET_TOKEN", loginResult.token)

    // 2. 獲取userInfo
    const userInfoResult = await requestUserInfoByToken(loginResult.token)
    await commit("SET_USER_INFO", userInfoResult)

    // 3. 跳轉
    router.push({ path: state.redirect || "/" })
  },

  // getUserInfo
  getUserInfoAction({ commit, state }) {
    return new Promise((resolve, reject) => {
      requestUserInfoByToken(state.token)
        .then((userInfoResult) => {
          commit("SET_USER_INFO", userInfoResult)
          resolve(userInfoResult)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // logout
  resetUser({ commit }) {
    return new Promise((resolve) => {
      localCache.remove("token")
      resetRouter()
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
