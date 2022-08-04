const getters = {
  // LOGIN，登入前儲存的資料
  account: (state) => state.login.account,
  // USER，登入後儲存的資料
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  routes: (state) => state.permission.routes,
  menuToggle: (state) => state.settings.menuOpened,
  settings: (state) => state.settings.settings
}
export default getters
