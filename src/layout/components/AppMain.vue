<template>
  <el-main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <!-- <keep-alive exclude="detail"> -->
        <component :is="Component" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </el-main>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
  height: calc(100% - 48px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
