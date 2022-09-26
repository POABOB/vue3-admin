<template>
  <div>
    <p>
      {{ route.path }}
    </p>
    <template v-if="route.children">
      <List
        v-for="route in route.children"
        :key="route.path"
        :route="route"
        class="sub-list"
      />
    </template>
  </div>
</template>
<script>
export default {
  name: "List",
  props: { route: { type: Object } }
}
</script>

<style lang="less" scoped>
.sub-list {
  margin-left: 100px;
}
</style>
