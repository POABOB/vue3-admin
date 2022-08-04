import localCache from "@/utils/cache"

const defaultAccount = { name: "", password: "", isRemember: false }

const state = () => {
  const account = localCache.getLocalSecret("account")
  return {
    account: account
      ? { name: account.name, password: account.password, isRemember: true }
      : defaultAccount
  }
}

const mutations = {
  SET_ACCOUNT: (state, account) => {
    state.account = account
  }
}

const actions = {
  setAccount({ commit }, payload) {
    return new Promise((resolve) => {
      localCache.setLocalSecret("account", payload)
      commit("SET_ACCOUNT", payload)
      resolve()
    })
  },
  resetAccount({ commit }) {
    return new Promise((resolve) => {
      localCache.removeLocal("account")
      commit("SET_ACCOUNT", defaultAccount)
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
