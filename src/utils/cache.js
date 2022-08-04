import Cookies from "js-cookie"
import CryptoJS from "crypto-js"

// Cookie大小限制4095-4097，localStorage大小限制5M
// 為了不要在傳遞Header增加負擔，除了token之外，其他可以使用localStorage
// 1. get、set：使用Cookie明文儲存
// 2. Secret字樣：使用加密儲存
// 3. Local字樣：使用localStorage儲存(儲存大量資訊，Ex：Menu, UserInfo, Account...)
class localCache {
  constructor() {
    this.keyPrefix = "vue3_admin_"
    this.keyPostfix = `_${process.env.VUE_APP_BASE_URL}`
    this.secretKey = process.env.VUE_APP_SECRET_KEY ?? "as4df86sdf4s6df4sd68fds"
  }

  keyName(key) {
    return `${this.keyPrefix}${key}${this.keyPostfix}`
  }

  // 無加密
  get(key) {
    const value = Cookies.get(this.keyName(key))
    if (value) {
      return JSON.parse(value)
    } else {
      return ""
    }
  }

  set(key, value) {
    return Cookies.set(this.keyName(key), JSON.stringify(value))
  }

  // 加密
  getSecret(key) {
    const secretValue = Cookies.get(this.keyName(key))
    if (secretValue) {
      const bytes = CryptoJS.AES.decrypt(secretValue, this.secretKey)
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    } else {
      return ""
    }
  }

  setSecret(key, value) {
    return Cookies.set(
      this.keyName(key),
      CryptoJS.AES.encrypt(JSON.stringify(value), this.secretKey).toString()
    )
  }

  remove(key) {
    return Cookies.remove(this.keyName(key))
  }

  // localStorage
  getLocal(key) {
    const value = window.localStorage.getItem(this.keyName(key))
    if (value) {
      return JSON.parse(value)
    } else {
      return ""
    }
  }

  setLocal(key, value) {
    return window.localStorage.setItem(this.keyName(key), JSON.stringify(value))
  }

  getLocalSecret(key) {
    const secretValue = window.localStorage.getItem(this.keyName(key))
    if (secretValue) {
      const bytes = CryptoJS.AES.decrypt(secretValue, this.secretKey)
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    } else {
      return ""
    }
  }

  setLocalSecret(key, value) {
    return window.localStorage.setItem(
      this.keyName(key),
      CryptoJS.AES.encrypt(JSON.stringify(value), this.secretKey).toString()
    )
  }

  removeLocal(key) {
    return window.localStorage.removeItem(this.keyName(key))
  }
}

export default new localCache()
