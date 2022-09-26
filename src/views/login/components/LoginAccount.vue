<template>
  <el-form
    :rules="rules"
    label-width="60px"
    :model="account"
    size="large"
    ref="formRef"
  >
    <el-form-item label="帳號" prop="name">
      <el-input v-model="account.name" id="name" />
    </el-form-item>
    <el-form-item label="密碼" prop="password">
      <el-input
        type="password"
        show-password
        v-model="account.password"
        id="password"
      />
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref } from "vue"
// 表單驗證規則
import { rules } from "../config/accountConfig"
import { useStore } from "vuex"

export default {
  setup() {
    const store = useStore()

    // 帳密
    const account = reactive({
      name: store.getters.account.name ?? "",
      password: store.getters.account.password ?? ""
    })

    const formRef = ref()
    const handleLogin = (isRemember) => {
      // 表單驗證
      formRef.value?.validate((valid) => {
        if (valid) {
          // 緩存帳號密碼
          if (isRemember === true) {
            store.dispatch("login/setAccount", { ...account, isRemember })
          } else {
            store.dispatch("login/resetAccount")
          }

          // 登入
          store.dispatch("user/loginAction", { ...account })
        }
      })
    }

    return {
      formRef,
      rules,
      account,
      handleLogin
    }
  }
}
</script>

<style scoped></style>
