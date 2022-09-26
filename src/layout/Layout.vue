<template>
  <div class="main">
    <el-container class="mainContent" :class="classObj">
      <Menu class="menuContainer" />
      <el-container class="page" direction="vertical">
        <Navbar v-show="showTopNavbar" />
        <AppMain />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { computed } from "vue"
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

    // const isCollapse = computed(() =>)
    // const isHidden = computed(() => )
    const classObj = computed(() => {
      return {
        closeMenu: store.getters.menuToggle,
        hideMenu:
          !store.getters.settings.showLeftMenu || window.innerWidth < 568
      }
    })

    return { showTopNavbar, classObj }
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
  }
}
.mainContent,
.page {
  height: 100%;
}

.closeMenu {
  .menuContainer {
    width: 60px;
  }
}
.hideMenu.closeMenu {
  .menuContainer {
    width: 0 !important;
  }
}
</style>
