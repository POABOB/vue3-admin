<template>
  <div class="main">
    <el-container class="mainContent" :class="classObj">
      <Menu class="menuContainer" />
      <div v-if="isCollapse" class="drawer-bg" @click="clickOutside"></div>
      <el-container class="page" direction="vertical">
        <Navbar v-show="showTopNavbar" />
        <AppMain />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { computed, watch } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { Menu, Navbar, AppMain } from "./components/index.js"
export default {
  components: {
    Menu,
    Navbar,
    AppMain
  },
  setup() {
    const store = useStore()
    const showTopNavbar = computed(() => store.getters.settings.showTopNavbar)

    // 點擊非menu區域，關閉menu
    const clickOutside = () => {
      store.dispatch("settings/closeMenu")
    }
    // 手機版監聽路由變化，每當改變路由就關閉menu
    const router = useRouter()
    watch(
      () => router.currentRoute.value.path,
      () => {
        if (device.value === "mobile")
          return store.dispatch("settings/closeMenu")
      }
    )

    const device = computed(() => store.getters.device)

    const classObj = computed(() => {
      return {
        closeMenu: store.getters.menuToggle,
        hideMenu:
          !store.getters.settings.showLeftMenu || device.value === "mobile"
      }
    })

    const isCollapse = computed(
      () => !store.getters.menuToggle && device.value === "mobile"
    )

    return { showTopNavbar, classObj, isCollapse, clickOutside }
  }
}
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .menuContainer {
    transition: width 0.1s;
    z-index: 1000;
    position: fixed;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .drawer-bg {
    background-color: #000;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: 999;
  }
}
.mainContent,
.page {
  height: 100%;
  width: 100%;
}
.page {
  transition: margin-left 0.1s;
  margin-left: 210px;
}

.closeMenu {
  .menuContainer {
    width: 60px;
  }
  .page {
    transition: margin-left 0.1s;
    margin-left: 60px;
  }
}
.hideMenu.closeMenu {
  .menuContainer {
    width: 0 !important;
  }
  .page {
    transition: margin-left 0.1s;
    margin-left: 0;
  }
}

.hideMenu {
  .page[data-v-82a49174] {
    margin-left: 0;
    position: relative;
    overflow: hidden;
  }
}
</style>
