<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script>
import LoginPanel from "./components/LoginPanel.vue"
export default {
  components: {
    LoginPanel
  }
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("@/assets/img/login-bg.svg");
}
</style>
