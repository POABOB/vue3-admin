import axios from "axios"
import { ElLoading } from "element-plus"
const DEFAULT_LOADING = true
class request {
  constructor(config) {
    // 請求實例化
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 有傳入攔截器，使用配置
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )

    // 沒有傳入攔截器，使用預設方式
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "Loading...",
            fullscreen: true,
            background: "rgba(0, 0, 0, 0.1)"
          })
        }
        return config
      },
      (error) => {
        console.log(`Error Request: ${error}`)
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        setTimeout(() => this.loading?.close(), 1000)
        return response.data
      },
      (error) => {
        setTimeout(() => this.loading?.close(), 1000)
        console.log(`Error Response: ${error}`)
        setTimeout(() => this.loading.close(), 1000)
        return Promise.reject(error)
      }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
          this.showLoading = DEFAULT_LOADING
        })
        .catch((error) => {
          reject(error)
          this.showLoading = DEFAULT_LOADING
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: "GET" })
  }

  post(config) {
    return this.request({ ...config, method: "POST" })
  }

  patch(config) {
    return this.request({ ...config, method: "PATCH" })
  }

  put(config) {
    return this.request({ ...config, method: "PUT" })
  }

  delete(config) {
    return this.request({ ...config, method: "DELETE" })
  }
}

export default request
