const settings = {
  // title
  title: "Vue3 Admin",
  /**
   * @type {boolean} true | false
   * @description LOGO位置
   */
  menuLogo: "",
  /**
   * @type {boolean} true | false
   * @description 是否要在Menu顯示LOGO
   */
  showMenuLogo: true,
  /**
   * @type {boolean} true | false
   * @description 是否要Dropdown
   */
  showDropdown: true,
  /**
   * @type {boolean} true | false
   * @description Whether show Hamburger
   */
  showHamburger: true,
  /**
   * @type {boolean} true | false
   * @description Whether show Breadcrumb
   */
  showBreadcrumb: true,
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showLeftMenu: true,
  /**
   * @type {boolean} true | false
   * @description Whether show the top Navbar
   */
  showTopNavbar: true,
  /* page  animation related*/
  /**
   * @type {boolean} true | false
   * @description Whether need animation of main area
   */
  mainNeedAnimation: true,
  /*page login or other*/
  /**
   * @type {boolean} true | false
   * @description Whether need login
   */
  isNeedLogin: true,
  /**
   * @type {string} 'roles' | 'code'
   */
  permissionMode: "roles",
  /**
   * @type {string | array} 'dev' | ['prod','test','dev'] according to the .env file props of VITE_APP_ENV
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['dev', 'test']
   */
  errorLog: ["prod"],
  /*
   * table height(100vh-delWindowHeight)
   * */
  openedWindowHeight: "210px",
  /*
   * table height(100vh-delWindowHeight)
   * */
  closedWindowHeight: "60px",
  /*
   * setting dev token when  isNeedLogin is setting false
   * */
  tmpToken: "tmp_token"
}

export default settings
