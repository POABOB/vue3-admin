<template>
  <div class="base permission">
    <h1>{{ userInfo.roles }} 你好，以下是你的路由</h1>
    <List v-for="route in routes" :key="route.path" :route="route" />
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import List from "@/components/List.vue"
export default {
  components: { List },
  setup() {
    const store = useStore()
    const userInfo = computed(() => store.getters.userInfo)
    const routes = computed(() => store.getters.routes)
    return { routes, userInfo }
  }
}
</script>

<style lang="less" scoped>
.base.permission {
  h1 {
    text-align: center;
  }
  margin-bottom: 0;
  text-align: left;
}
</style>
