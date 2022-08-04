import { createStore } from "vuex"
import user from "@/store/modules/user"
import login from "@/store/modules/login"
import permission from "@/store/modules/permission"
import settings from "@/store/modules/settings"
import getters from "./getters"

const store = createStore({
  modules: {
    login,
    user,
    permission,
    settings
  },
  getters
})

export default store
