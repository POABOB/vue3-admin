import router, { asyncRoutes } from "@/router"
import localCache from "@/utils/cache"
import settings from "@/settings"
import { ElLoading } from "element-plus"

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
    userInfo: {},
    roles: localCache.getLocal("roles") ?? []
  }
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  RESET_ALL: (state) => {
    Object.assign(state, defaultUser())
  }
}

const actions = {
  async loginAction({ commit }, payload) {
    const loading = ElLoading.service({
      lock: true,
      text: "Loading...",
      fullscreen: true,
      background: "rgba(0, 0, 0, 0.1)"
    })
    // 1. 登入
    if (settings.isNeedLogin) {
      const loginResult = await requestLogin(payload)
      localCache.set("token", loginResult.token)
      await commit("SET_TOKEN", loginResult.token)
    } else loading

    // 2. 跳轉
    router.push({ path: state.redirect || "/" })

    if (!settings.isNeedLogin) {
      router.afterEach(() => {
        setTimeout(() => loading?.close(), 1000)
      })
    }
  },

  // getUserInfo
  getUserInfoAction({ commit, state }) {
    return new Promise((resolve, reject) => {
      requestUserInfoByToken(state.token)
        .then((userInfoResult) => {
          commit("SET_USER_INFO", userInfoResult)
          commit("SET_ROLES", userInfoResult.roles)
          resolve(userInfoResult)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // setUserInfo
  setUserInfoAction({ commit }, { userInfo, roles }) {
    return new Promise((resolve) => {
      commit("SET_USER_INFO", userInfo)
      // 紀錄 roles
      localCache.setLocal("roles", roles)
      commit("SET_ROLES", roles)
      resolve(userInfo)
    })
  },

  // noNeedLogin
  setTokenAction({ commit }, token) {
    localCache.set("token", token)
    commit("SET_TOKEN", token)
  },

  // logout
  resetUser({ commit }) {
    return new Promise((resolve) => {
      localCache.remove("token")
      localCache.removeLocal("roles")
      localCache.removeLocal("routes")
      localCache.removeLocal("addRoutes")
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
