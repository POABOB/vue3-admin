<template>
  <el-main>
    <router-view v-slot="{ Component }">
      <!-- TODO 調查KEEP ALIVE BUG -->
      <!-- <transition name="fade-transform" mode="out-in">
        <keep-alive> -->
      <component :is="Component" :key="key" />
      <!-- </keep-alive>
      </transition> -->
    </router-view>
  </el-main>
</template>

<script>
import { computed } from "vue"
import { useRoute } from "vue-router"
export default {
  setup() {
    const route = useRoute()
    const key = computed(() => route.path)
    return { key }
  }
}
</script>

<style lang="less" scoped>
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
  height: calc(100% - 48px);
}
</style>
