const path = require("path")

module.exports = {
  // 將路徑components簡化
  // components/HelloWorld.vue or @/components/HelloWorld.vue
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components")
  }
}
