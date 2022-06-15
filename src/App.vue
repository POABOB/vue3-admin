<template>
  <h2>{{ $store.state.name }}</h2>
  <router-link to="/login">登入</router-link>
  <router-link to="/main">後台</router-link>
  <router-view></router-view>

  <el-button>確認</el-button>
  <el-button type="primary">更新</el-button>
  <el-button type="danger">取消</el-button>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
