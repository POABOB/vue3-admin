<template>
  <!-- MENU -->
  <div class="submenu" v-if="!item.hidden">
    <template
      v-if="
        showMenuItem(item.children, item) &&
        (!child.children || child?.hasNoChildren) &&
        (!item.meta || !item.meta.alwaysShow)
      "
    >
      <Link v-if="child.meta" :to="resolvePath(child.path)">
        <el-menu-item
          popper-append-to-body
          :index="resolvePath(child.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <el-icon>
            <component :size="20" :is="`${child.meta.icon}`"></component>
          </el-icon>
          <span></span>
          <template #title>{{ child.meta.title }}</template>
        </el-menu-item>
      </Link>
    </template>

    <!-- 子MENU -->
    <el-sub-menu
      v-else
      ref="MenuItem"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template #title>
        <el-icon>
          <component :size="20" :is="`${item.meta.icon}`"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem
        v-for="child in item.children"
        :key="child.path"
        :isNest="true"
        :item="child"
        :basePath="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>

<script>
import { ref } from "vue"
import { isExternal } from "@/utils/validate"
import { resolve } from "@/utils/utils"
import Link from "./Link.vue"
export default {
  components: { Link },
  props: {
    item: { type: Object, required: true },
    isNest: { type: Boolean, default: false },
    basePath: { type: String, default: "" }
  },
  setup(props) {
    // for迴圈遍歷MENU用的變數
    const child = ref(null)
    // 判斷是否要顯示該MenuItem
    const showMenuItem = (children = [], parent) => {
      // 將
      const hasChildren = children.filter((item) => (child.value = item))
      // 如果children只有一個
      if (hasChildren.length === 1) return true

      // 如果沒有children
      if (hasChildren.length === 0) {
        child.value = { ...parent, path: "", hasNoChildren: true }
        return true
      }
      return false
    }

    // 路徑判斷是否為外部連結
    const resolvePath = (routePath) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return resolve(props.basePath, routePath)
    }

    return {
      showMenuItem,
      child,
      resolvePath
    }
  }
}
</script>

<style lang="less" scoped>
.submenu {
  .el-menu-item.is-active {
    color: #0a60bd !important;
  }
  .el-menu-item .el-icon,
  .el-sub-menu .el-icon {
    margin-right: 16px;
  }
}
.closeMenu {
  .submenu {
    width: 60px;
  }
}
</style>
