const getters = {
  // LOGIN，登入前儲存的資料
  account: (state) => state.login.account,
  // USER，登入後儲存的資料
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  roles: (state) => state.user.roles,
  routes: (state) => state.permission.routes,
  menuToggle: (state) => state.settings.menuOpened,
  device: (state) => state.settings.device,
  settings: (state) => state.settings.settings
}
export default getters
