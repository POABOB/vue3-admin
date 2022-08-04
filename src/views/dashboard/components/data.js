const techStackLiData = [
  {
    title: "開發工具",
    link: "https://code.visualstudio.com",
    name: "Visual Studio Code"
  },
  {
    title: "程式語言",
    link: "https://javascript.info",
    name: "JavaScript"
  },
  {
    title: "打包工具",
    link: "https://webpack.js.org",
    name: "Webpack 5.x"
  },
  {
    title: "前端框架",
    link: "https://vuejs.org",
    name: "Vue 3.x"
  },
  {
    title: "路由工具",
    link: "https://router.vuejs.org",
    name: "Vue Router 4.x"
  },
  {
    title: "狀態管理",
    link: "https://vuex.vuejs.org",
    name: "Vuex 4.x"
  },
  {
    title: "UI 框架",
    link: "https://element-plus.org",
    name: "Element Plus"
  },
  {
    title: "文字編輯器",
    link: "https://ckeditor.com",
    name: "CKEditor 5"
  },
  {
    title: "數據模擬",
    link: "http://mockjs.com",
    name: "Mock.js"
  },
  {
    title: "CSS 預處理器",
    link: "https://lesscss.org",
    name: "LESS"
  },
  {
    title: "HTTP工具",
    link: "https://axios-http.com",
    name: "Axios"
  },
  {
    title: "Git Hook 工具",
    link: "https://typicode.github.io/husky",
    name: "Husky"
  },
  {
    title: "單元測試",
    symbol: " + ",
    children: [
      {
        link: "https://test-utils.vuejs.org",
        name: "Vue Test Utils"
      },
      {
        link: "https://jestjs.io",
        name: "Jest"
      }
    ]
  },
  {
    title: "程式規範",
    symbol: " + ",
    children: [
      {
        link: "https://editorconfig.org",
        name: "EditorConfig"
      },
      {
        link: "https://prettier.io",
        name: "Prettier"
      },
      {
        link: "https://eslint.org",
        name: "ESLint"
      }
    ]
  },
  {
    title: "提交規範",
    symbol: " + ",
    children: [
      {
        link: "https://commitizen-tools.github.io/commitizen",
        name: "Commitizen"
      },
      {
        link: "https://commitlint.js.org",
        name: "Commitlint"
      }
    ]
  },
  {
    title: "自動部屬",
    symbol: " + ",
    children: [
      {
        link: "https://cloud.google.com",
        name: "Google Cloud Platform"
      },
      {
        link: "https://www.debian.org",
        name: "Debian"
      },
      {
        link: "https://www.jenkins.io",
        name: "Jenkins"
      },
      {
        link: "https://www.nginx.com",
        name: "Nginx"
      }
    ]
  }
]

const techStackTableData = [
  {
    title1: "@commitlint/cli",
    version1: "^17.0.2",
    title2: "@commitlint/config-conventional",
    version2: "^17.0.2"
  },
  {
    title1: "@vue/cli-plugin-babel",
    version1: "^5.0.6",
    title2: "@vue/cli-plugin-eslint",
    version2: "^5.0.6"
  },
  {
    title1: "@vue/cli-service",
    version1: "^5.0.6",
    title2: "@vue/compiler-sfc",
    version2: "^3.0.0-0"
  },
  {
    title1: "@vue/eslint-config-prettier",
    version1: "^6.0.0",
    title2: "babel-eslint",
    version2: "^10.1.0"
  },
  {
    title1: "commitizen",
    version1: "^4.2.4",
    title2: "cz-conventional-changelog",
    version2: "^3.3.0"
  },
  {
    title1: "eslint",
    version1: "^7.32.0",
    title2: "eslint-plugin-prettier",
    version2: "^3.3.1"
  },
  {
    title1: "eslint-plugin-vue",
    version1: "^7.0.0",
    title2: "husky",
    version2: "^8.0.0"
  },
  {
    title1: "less",
    version1: "^4.1.3",
    title2: "less-loader",
    version2: "^11.0.0"
  },
  {
    title1: "prettier",
    version1: "^2.7.1",
    title2: "unplugin-auto-import",
    version2: "^0.8.8"
  },
  {
    title1: "unplugin-vue-components",
    version1: "^0.19.6",
    title2: "",
    version2: ""
  }
]

const treeTextData = `│  App.vue
│  main.js
│  permission.js
│  settings.js
│
├─assets
│  ├─css
│  │      base.less
│  │      errorPage.less
│  │      index.less
│  │
│  └─img
│          login-bg.svg
│          logo.png
│
├─components
│  └─form
├─global
│      index.js
│
├─layout
│  │  index.js
│  │  Layout.vue
│  │
│  └─components
│      │  AppMain.vue
│      │  index.js
│      │
│      ├─Menu
│      │      index.js
│      │      Link.vue
│      │      Logo.vue
│      │      Menu.vue
│      │      MenuItem.vue
│      │
│      └─Navbar
│              Breadcrumb.vue
│              Dropdown.vue
│              Hamburger.vue
│              index.js
│              Navbar.vue
│
├─router
│  │  index.js
│  │
│  └─modules
│          form.js
│          permission.js
│          story.js
│
├─service
│  │  index.js
│  │
│  ├─api
│  │      user.js
│  │
│  └─request
│          index.js
│
├─store
│  │  getters.js
│  │  index.js
│  │
│  └─modules
│          login.js
│          permission.js
│          settings.js
│          user.js
│
├─utils
│      cache.js
│      utils.js
│      validate.js
│
└─views
    ├─CRUD
    │      CRUD.vue
    │      index.js
    │
    ├─dashboard
    │  │  Dashboard.vue
    │  │  index.js
    │  │
    │  └─components
    │          Info.vue
    │          staticData.js
    │          TechStack.vue
    │          Tree.vue
    │
    ├─error
    │  ├─403
    │  │      403.vue
    │  │      index.js
    │  │
    │  └─404
    │          404.vue
    │          index.js
    │
    ├─form
    │      Form.vue
    │      index.js
    │
    ├─login
    │  │  index.js
    │  │  Login.vue
    │  │
    │  ├─components
    │  │      LoginAccount.vue
    │  │      LoginPanel.vue
    │  │      LoginPhone.vue
    │  │
    │  └─config
    │          accountConfig.js
    │          phoneConfig.js
    │
    ├─permission
    │      index.js
    │      Permission.vue
    │
    └─story
            index.js
            Story.vue
`

const rulesTableData1 = [
  {
    title: "資料夾",
    version: "統一小寫，多個單字使用駝峰式"
  },
  {
    title: "檔案(.js .vue .json .d.ts)",
    version: "統一小寫，多個單字使用駝峰式(.vue檔則是第一個字大寫)"
  }
]
const rulesTableData2 = [
  {
    title: "組件的檔案",
    version: "第一個字大寫，其他小寫，多個單字使用駝峰式"
  },
  {
    title: "組件的目錄結構",
    version: "例如 button 組件：button/Button.vue，統一在button/index.js導出"
  },
  {
    title: "組件引入順序",
    version:
      "vue/vuex/vue-router相關的函數，第三方函式庫，本地的組件，本地的utils函數"
  },
  {
    title: "組件的名稱",
    version: "第一個字大寫，其他小寫，多個單字使用駝峰式"
  },
  {
    title: "組件屬性順序",
    version: "name，components，props，emits，setup..."
  },
  {
    title: "template 標籤",
    version:
      "第一個字大寫，其他小寫，多個單字使用駝峰式(例如：<LoginAccount />)"
  },
  {
    title: "template 標籤屬性順序",
    version: "v-if，v-for，ref，class，style，...，事件"
  },
  {
    title: "組件的 props",
    version: "第一個字小寫，駝峰式命名，必須填寫類型和默認值"
  },
  {
    title: "組件的樣式",
    version: "作用域：scoped，lang=less；class：統一小寫，多個單字使用駝峰式"
  }
]
export {
  techStackLiData,
  techStackTableData,
  treeTextData,
  rulesTableData1,
  rulesTableData2
}
