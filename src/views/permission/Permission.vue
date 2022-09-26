<template>
  <div class="base permission">
    <h1>你的身分是 {{ userInfo.roles }}</h1>
    <el-form label-width="120px" status-icon>
      <el-radio-group v-model="rolesRadio" @change="handleRoles">
        <el-radio label="admin" />
        <el-radio label="editor" />
      </el-radio-group>
    </el-form>
  </div>
</template>

<script>
import { computed, ref } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const userInfo = computed(() => store.getters.userInfo)
    const rolesRadio = ref(userInfo.value.roles[0])

    const handleRoles = () => {
      const oldUserInfo = JSON.parse(JSON.stringify(store.getters.userInfo))
      oldUserInfo.roles.shift()
      oldUserInfo.roles.push(rolesRadio.value)
      store.dispatch("user/setUserInfoAction", {
        userInfo: oldUserInfo,
        roles: oldUserInfo.roles
      })
      location.reload()
    }
    return { userInfo, rolesRadio, handleRoles }
  }
}
</script>

<style lang="less" scoped>
.base.permission {
  margin-bottom: 0;
  height: calc(100% - 25px);
}
</style>
