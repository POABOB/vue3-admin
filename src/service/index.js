import request from "./request"
import { ElMessageBox, ElMessage } from "element-plus"

// TODO VUEX GET_TOKEN、RESET_TOKEN
// 封裝AXIOS實例，可能會有多種不同配置的請求
// 依照不同status code來顯示Message || ElMessageBox
const service = new request({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.VUE_APP_TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // HEADER挾帶Token
      const token = "123"
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log(`Error Request: ${error}`)
      return Promise.reject(error)
    },
    responseInterceptor: (response) => {
      return response.data
    },
    responseInterceptorCatch: (error) => {
      console.log(`Error Response: ${error}`)
      // 508: 不合法token; 512: 已被登入; 514: token過期;
      if (
        error.response.status === 508 ||
        error.response.status === 512 ||
        error.response.status === 514
      ) {
        ElMessageBox.confirm("你已經被登出了，請重新再登入!", "確認登出", {
          confirmButtonText: "重新登入",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          // TOCO RESET
          // store.dispatch("user/resetToken").then(() => {
          //   location.reload()
          // })
        })
      } else {
        ElMessage({
          message: error.message,
          type: "error"
        })
      }
      return Promise.reject(error)
    }
  }
})
export default service
