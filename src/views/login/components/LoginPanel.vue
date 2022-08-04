<template>
  <div class="loginPanel">
    <h1 class="title">後臺管理系統</h1>
    <el-tabs type="border-card" class="tabs" stretch v-model="elTabRef">
      <el-tab-pane name="account">
        <template #label>
          <span class="tabs-label">
            <el-icon><Avatar /></el-icon>
            <span> 帳號登入</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="tabs-label">
            <el-icon><PhoneFilled /></el-icon>
            <span> 手機登入</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="loginControl">
      <el-checkbox v-model="isRemember" label="記住密碼" size="large" />
      <el-link type="primary" :underline="false">忘記密碼</el-link>
    </div>

    <el-button
      type="primary"
      class="loginBtn"
      size="large"
      @click="loginHandler"
    >
      點擊登入
    </el-button>
  </div>
</template>

<script>
import { ref } from "vue"
import LoginAccount from "./LoginAccount.vue"
import LoginPhone from "./LoginPhone.vue"
import { useStore } from "vuex"
export default {
  components: {
    LoginPhone,
    LoginAccount
  },
  setup() {
    const store = useStore()
    // 是否記住密碼
    let isRemember = ref(store.getters.account.isRemember)
    // Ref用來傳遞組件間訊息
    const accountRef = ref()
    const phoneRef = ref()
    const elTabRef = ref("account")
    const loginHandler = () => {
      if (elTabRef.value === "account") {
        accountRef.value?.handleLogin(isRemember.value)
      } else {
        phoneRef.value?.handleLogin()
      }
    }
    return {
      isRemember,
      loginHandler,
      accountRef,
      elTabRef,
      phoneRef
    }
  }
}
</script>

<style lang="less" scoped>
.loginPanel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .loginControl {
    display: flex;
    justify-content: space-between;
  }
  .loginBtn {
    width: 100%;
  }
  .tabs {
    .tabs-label {
      .el-icon,
      span {
        vertical-align: middle;
      }
    }
  }
}
</style>
