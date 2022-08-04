import defaultSettings from "@/settings"

const state = () => {
  return {
    menuOpened: false,
    device: "desktop",
    settings: defaultSettings
  }
}

const mutations = {
  SET_MENU: (state) => {
    state.menuOpened = !state.menuOpened
  }
}

const actions = {
  setMenuAction({ commit }) {
    commit("SET_MENU")
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
