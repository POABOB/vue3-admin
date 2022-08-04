<template>
  <div class="base rules">
    <h3>專案規範</h3>
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>

    <h4>檔案命名規範</h4>
    <el-table
      :data="table1"
      :cell-style="columnStyle"
      style="width: 100%"
      align="center"
      :show-header="false"
      border
    >
      <el-table-column prop="title" />
      <el-table-column label="version">
        <template #default="scope">
          <el-tag v-if="scope.row.version">{{ scope.row.version }}</el-tag>
        </template>
      </el-table-column>
    </el-table>

    <h4>編寫組件規範</h4>
    <el-table
      :data="table2"
      :cell-style="columnStyle"
      style="width: 100%"
      align="center"
      :show-header="false"
      border
    >
      <el-table-column prop="title" />
      <el-table-column label="version">
        <template #default="scope">
          <el-tag v-if="scope.row.version">{{ scope.row.version }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref } from "vue"
import { rulesTableData1, rulesTableData2 } from "./data"

export default {
  setup() {
    const table1 = ref(rulesTableData1)
    const table2 = ref(rulesTableData2)
    const columnStyle = ({ columnIndex }) => {
      if (columnIndex === 0 || columnIndex === 2) {
        return { background: "#F9FAFD" }
      } else {
        return { background: "#fff" }
      }
    }
    return { table1, table2, columnStyle }
  }
}
</script>

<style lang="less" scoped>
.rules {
  h3 {
    text-align: center;
  }
  text-align: left;
}
</style>
