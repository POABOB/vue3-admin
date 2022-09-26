<template>
  <el-aside :width="asideWidth">
    <div class="menu">
      <Logo v-show="settings.showMenuLogo" :isOpened="!isCollapse" />

      <el-scrollbar>
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :unique-opened="false"
          :collapse-transition="false"
          class="el-menu-vertical"
          active-text-color="#fff"
          background-color="#001529"
          text-color="#fff"
        >
          <MenuItem
            v-for="item in routes"
            :key="item.path"
            :item="item"
            :basePath="item.path"
            :isCollapse="isCollapse"
          />
        </el-menu>
      </el-scrollbar>
    </div>
  </el-aside>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import MenuItem from "./MenuItem.vue"
import Logo from "./Logo.vue"
export default {
  components: {
    MenuItem,
    Logo
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const routes = computed(() => store.getters.routes)
    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta.activeMenu) return meta.activeMenu
      return path
    })

    const isCollapse = computed(() => store.getters.menuToggle)
    const settings = computed(() => store.getters.settings)
    // 如果手機螢幕大小的話，Menu關閉就不要顯示ICON
    const asideWidth = computed(() =>
      isCollapse.value
        ? settings.value.closedWindowHeight
        : settings.value.openedWindowHeight
    )

    return { routes, activeMenu, isCollapse, settings, asideWidth }
  }
}
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  // width: 100%;
  background-color: #001529;
  .el-menu {
    border-right: none;
  }
}
.el-menu-vertical:not(.el-menu-collapse) {
  width: 210px;
  height: 100%;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  // transition: width 0.15s;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
