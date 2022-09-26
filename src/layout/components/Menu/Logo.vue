<template>
  <!-- LOGO -->
  <div>
    <router-link to="/" class="logo">
      <img
        v-if="!settings.menuLogo"
        class="img"
        src="~@/assets/img/logo.png"
        alt="logo"
      />
      <img v-else class="img" :src="!settings.menuLogo" alt="logo" />
      <span v-show="isOpened" class="title">{{ settings.title }}</span>
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
export default {
  props: { isOpened: { type: Boolean, default: true } },
  setup() {
    const store = useStore()
    const settings = computed(() => store.getters.settings)
    return { settings }
  }
}
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  height: 32px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  .img {
    height: 100%;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}
</style>
