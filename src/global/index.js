import "element-plus/theme-chalk/base.css"
// 因為service的請求會用到，所以全局引入
import "element-plus/theme-chalk/el-message.css"
import "element-plus/theme-chalk/el-message-box.css"
import "element-plus/theme-chalk/el-loading.css"
// 按需全局引入組件
import { ElButton } from "element-plus"
const components = [ElButton]

export function globalRegister(app) {
  for (const c of components) {
    app.component(c.name, c)
  }
}
