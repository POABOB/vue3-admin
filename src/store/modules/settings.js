import defaultSettings from "@/settings"

const state = () => {
  return {
    menuOpened: window.innerWidth < 568 ? true : false,
    device: window.innerWidth < 568 ? "mobile" : "desktop",
    settings: defaultSettings
  }
}

const mutations = {
  SET_MENU: (state) => {
    state.menuOpened = !state.menuOpened
  },

  CLOSE_MENU: (state) => {
    state.menuOpened = true
  }
}

const actions = {
  setMenuAction({ commit }) {
    commit("SET_MENU")
  },

  closeMenu({ commit }) {
    commit("CLOSE_MENU")
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
