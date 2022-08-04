<template>
  <div class="base techStack">
    <h3>使用技術</h3>
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>

    <ul class="ul">
      <li v-for="item in li" :key="item.title">
        <span>{{ item.title }}：</span>
        <template v-if="item?.children !== undefined">
          <template v-for="(child, index) in item.children" :key="child.name">
            <span v-show="index !== 0">{{ item.symbol }}</span>
            <el-link
              class="link"
              :href="child.link"
              type="primary"
              target="__BLANK"
            >
              {{ child.name }}
            </el-link>
          </template>
        </template>
        <template v-else>
          <el-link
            class="link"
            :href="item.link"
            type="primary"
            target="__BLANK"
          >
            {{ item.name }}
          </el-link>
        </template>
      </li>
    </ul>

    <h4>開發版本依賴(devDependencies)</h4>
    <el-table
      :data="table"
      :cell-style="columnStyle"
      style="width: 100%"
      align="center"
      :show-header="false"
      border
    >
      <el-table-column prop="title1" />
      <el-table-column label="version1">
        <template #default="scope">
          <el-tag v-if="scope.row.version1">{{ scope.row.version1 }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="title2" />
      <el-table-column label="version2">
        <template #default="scope">
          <el-tag v-if="scope.row.version2">{{ scope.row.version2 }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref } from "vue"
import { techStackLiData, techStackTableData } from "./data"
export default {
  setup() {
    const li = ref(techStackLiData)
    const table = ref(techStackTableData)

    const columnStyle = ({ columnIndex }) => {
      if (columnIndex === 0 || columnIndex === 2) {
        return { background: "#F9FAFD" }
      } else {
        return { background: "#fff" }
      }
    }

    return { li, table, columnStyle }
  }
}
</script>

<style lang="less" scoped>
.techStack {
  h3 {
    text-align: center;
  }
  text-align: left;
  ul.ul {
    text-align: left;
    li {
      margin-bottom: 10px;
      .link {
        font-size: 16px;
      }
    }
  }
}
</style>
