const path = require("path")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

// CKEditor
const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin")
const { styles } = require("@ckeditor/ckeditor5-dev-utils")

module.exports = {
  // The source of CKEditor is encapsulated in ES6 modules. By default, the code
  // from the node_modules directory is not transpiled, so you must explicitly tell
  // the CLI tools to transpile JavaScript files in all ckeditor5-* modules.
  transpileDependencies: [/ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/],

  configureWebpack: {
    plugins: [
      // CKEditor needs its own plugin to be built using webpack.
      new CKEditorWebpackPlugin({
        // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        language: "zh",

        // Append translations to the file matching the `app` name.
        translationsOutputFile: /app/
      })
    ]
  },
  chainWebpack: (config) => {
    // 將路徑components簡化
    // components/HelloWorld.vue or @/components/HelloWorld.vue
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components")
    // ELEMENT-PLUS按需自動引入
    config
      .plugin("AutoImport")
      .use(AutoImport({ resolvers: [ElementPlusResolver()] }))
    config
      .plugin("Components")
      .use(Components({ resolvers: [ElementPlusResolver()] }))

    config.devServer
      // .port(8080)
      // .open(true)
      .proxy({
        "^/api": {
          target: "http://152.136.185.210:5000/",
          // target: "http://localhost:8080/",
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        }
      })

    // 加載EDITOR ICON
    const svgRule = config.module.rule("svg")
    svgRule.exclude.add(path.join(__dirname, "node_modules", "@ckeditor"))
    config.module
      .rule("cke-svg")
      .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
      .use("raw-loader")
      .loader("raw-loader")
    // 加載EDITOR CSS
    config.module
      .rule("cke-css")
      .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
      .use("postcss-loader")
      .loader("postcss-loader")
      .tap(() => {
        return {
          postcssOptions: styles.getPostCssConfig({
            themeImporter: {
              themePath: require.resolve("@ckeditor/ckeditor5-theme-lark")
            },
            minify: true
          })
        }
      })
  }
}
