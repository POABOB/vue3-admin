const path = require("path")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

module.exports = {
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
  }
}
