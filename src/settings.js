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
  isNeedLogin: false,
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
  tmpToken: "tmp_token",
  /*
   * setting dev user info when  isNeedLogin is setting false
   * */
  tmpUserInfo: {
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
    id: 60,
    name: "User",
    roles: ["admin"]
  }
}

export default settings
