<template>
  <el-header class="pageHeader">
    <Hamburger
      v-show="settings.showHamburger"
      @toggleClick="handleClick"
      :isOpened="isOpened"
    />
    <div class="navbarContainer">
      <Breadcrumb v-show="settings.showBreadcrumb" />
      <Dropdown v-show="settings.showDropdown" />
    </div>
  </el-header>
</template>

<script>
import { computed } from "vue"
import Hamburger from "./Hamburger.vue"
import Breadcrumb from "./Breadcrumb.vue"
import Dropdown from "./Dropdown.vue"
import { useStore } from "vuex"
export default {
  components: {
    Hamburger,
    Breadcrumb,
    Dropdown
  },
  setup() {
    const store = useStore()
    const handleClick = () => store.dispatch("settings/setMenuAction")

    const isOpened = computed(() => store.getters.menuToggle)
    const settings = computed(() => store.getters.settings)

    return { isOpened, handleClick, settings }
  }
}
</script>

<style lang="less" scoped>
.el-header.pageHeader {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
  padding-left: 0;
  height: 48px !important;

  .navbarContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
