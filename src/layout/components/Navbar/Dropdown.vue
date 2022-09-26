<template>
  <div class="dropdownContainer">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" :icon="UserFilled" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="https://github.com/POABOB/vue3-admin"
              target="blank"
            >
              GitHub
            </el-link>
          </el-dropdown-item>
          <el-dropdown-item @click="handleLogout" divided
            >登出</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { UserFilled } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const handleLogout = async () => {
      await store.dispatch("user/resetUser")
      router.push({ path: "/login", replace: true })
    }
    return { UserFilled, handleLogout }
  }
}
</script>

<style lang="less" scoped>
.dropdownContainer {
  padding: 0 5px;
  height: 100%;
  display: flex;
  align-items: center;
  float: right;
  height: 100%;

  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
