<template>
  <div class="base menu">
    <h1>
      當前路由：
      {{ levelList[levelList.length - 1].path }}，以下為它的路由的層級：
    </h1>
    <List :route="levelList[0]" />
  </div>
</template>

<script>
import { ref, onBeforeMount, watch } from "vue"
import { useRoute } from "vue-router"
import List from "@/components/List.vue"
export default {
  components: { List },
  setup() {
    // 路由層級
    const levelList = ref([])

    // 藉由當前路由來獲取麵包屑
    const route = useRoute()
    const getRoutes = () => {
      // 從當前的路由中尋找層級
      // 並且只抓有 meta.title 的路由，這樣才能知道怎麼顯示
      let matched = route.matched.filter(
        (item) => item.meta && item.meta?.title
      )

      // 把 meta.breadcrumb 的值是 false 的路由過濾
      levelList.value = matched.filter(
        (item) => item.meta.title && item.meta.breadcrumb !== false
      )
    }

    // mount之前後加載麵包屑
    onBeforeMount(() => getRoutes())

    // 路由更改後，加載麵包屑
    watch(route, () => getRoutes())

    return { levelList }
  }
}
</script>

<style lang="less" scoped>
.base.menu {
  h1 {
    text-align: center;
  }
  margin-bottom: 0;
  text-align: left;
}
</style>
