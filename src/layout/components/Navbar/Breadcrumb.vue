<template>
  <div class="breadcrumbContainer">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb" mode="out-in">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
          <!-- 如果是 最後一層路由 或 非重新導向 就顯示 -->
          <span
            v-if="
              item.redirect === 'noRedirect' || index == levelList.length - 1
            "
            class="no-redirect"
          >
            {{ item.meta.title }}
          </span>
          <!-- 否則就抓其他層級 -->
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
import { ref, onBeforeMount, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { resolve } from "@/utils/utils"
export default {
  setup() {
    // 路由層級
    const levelList = ref([])

    // 判斷是否為 首頁 或 Dashboard
    const isDashboard = (route) => {
      const name = route?.name
      if (!name) return false
      return name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
    }

    // 藉由當前路由來獲取麵包屑
    const route = useRoute()
    const getBreadcrumb = () => {
      // 從當前的路由中尋找層級
      // 並且只抓有 meta.title 的路由，這樣才能知道怎麼顯示
      let matched = route.matched.filter(
        (item) => item.meta && item.meta?.title
      )
      // 判斷第一個路由是不是 首頁 或 Dashboard
      // 不是就加入
      if (!isDashboard(matched[0])) {
        matched = [{ path: "/dashboard", meta: { title: "系統總覽" } }].concat(
          matched
        )
      }
      // 把 meta.breadcrumb 的值是 false 的路由過濾
      levelList.value = matched.filter(
        (item) => item.meta.title && item.meta.breadcrumb !== false
      )
    }

    // 處理路由，看是要 重導向 還是 切換路由
    const router = useRouter()
    const handleLink = (item) => {
      if (item.redirect) {
        router.push(item.redirect)
        return
      }
      if (item.path) router.push(resolve(item.path))
    }

    // mount之前後加載麵包屑
    onBeforeMount(() => getBreadcrumb())

    // 路由更改後，加載麵包屑
    watch(route, () => getBreadcrumb())

    return { levelList, handleLink }
  }
}
</script>

<style lang="less" scoped>
.breadcrumbContainer {
  padding: 0 5px;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
