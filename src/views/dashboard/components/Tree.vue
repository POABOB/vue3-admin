<template>
  <div class="base tree">
    <h3>目錄結構</h3>
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <pre class="code" v-text="tree"></pre>
  </div>
</template>

<script>
import { ref } from "vue"
import { treeTextData } from "./data"

export default {
  setup() {
    const tree = ref(treeTextData)
    return { tree }
  }
}
</script>

<style lang="less" scoped>
.tree {
  padding-bottom: 5px;
  h3 {
    text-align: center;
  }
  text-align: left;
  pre.code {
    background-color: rgb(244, 242, 242);
    padding: 20px;
  }
}
</style>
