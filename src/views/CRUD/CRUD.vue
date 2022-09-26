<template>
  <div class="base CRUD">
    <div class="input">
      <el-row :gutter="20">
        <el-col>
          <el-form
            @submit.prevent="Search"
            :inline="true"
            class="demo-form-inline"
          >
            <el-form-item>
              <el-button @click="Add">新增人員</el-button>
            </el-form-item>
            <el-form-item>
              <el-col :span="16">
                <el-input v-model="searchMap.word" placeholder="姓名 性別..." />
              </el-col>
              <el-col :span="8">
                <el-button type="primary" :icon="icon_search" @click="Search">
                  查詢
                </el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>

    <el-table
      v-loading="listLoading"
      :data="
        list.slice(
          (page.currPage - 1) * page.pageSize,
          page.currPage * page.pageSize
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="#" width="50">
        <template v-slot="scope">
          {{ scope.$index + (page.currPage - 1) * page.pageSize + 1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="name" label="姓名" />
      <el-table-column align="center" prop="birthday" label="生日" />
      <el-table-column align="center" prop="gender" label="性別">
        <template v-slot="scope">
          <el-tag :type="scope.row.gender === '男' ? '' : 'danger'">
            {{ scope.row.gender }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="updated_at" label="更新日期" />
      <el-table-column align="center" label="操作" width="115">
        <template v-slot="scope">
          <el-button
            type="info"
            :icon="icon_edit"
            circle
            @click="Edit(scope.row.id)"
          />
          <el-button
            type="danger"
            :icon="icon_delete"
            circle
            @click="Delete(scope.row.id)"
          />
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next, sizes, total"
        align="center"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="page.pageSize"
        :total="list.length"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>

    <!-- Form -->
    <el-dialog
      title="人員管理"
      v-model="dialogFormVisible"
      width="30%"
      class="dialogSize"
    >
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        @submit.prevent="handleSubmit(formRef)"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" autocomplete="off" placeholder="姓名" />
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker
            v-model="form.birthday"
            autocomplete="off"
            placeholder="生日"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            type="date"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="性別">
          <el-radio-group v-model="form.gender">
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogFormVisible = false"> 取 消 </el-button>
        <el-button type="info" @click="handleSubmit(formRef)">
          確 定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { onMounted, watch, reactive, ref } from "vue"
import { CRUD_data } from "./data"
import { ElMessage, ElMessageBox } from "element-plus"
import {
  Delete as icon_delete,
  Edit as icon_edit,
  Search as icon_search
} from "@element-plus/icons-vue"
export default {
  setup() {
    // 設定
    const listLoading = ref(true)
    const dialogFormVisible = ref(false)

    // 分頁
    const page = reactive({ pageSize: 10, currPage: 1 })
    const handleCurrentChange = (_page) => {
      page.currPage = _page
    }
    const handleSizeChange = (_size) => {
      page.pageSize = _size
    }

    // CRUD
    const list = ref([])
    const fullList = ref([])
    const formRef = ref(null)
    let form = reactive({
      id: "",
      name: "",
      birthday: "",
      gender: "男",
      updated_at: ""
    })
    const rules = reactive({
      name: [
        { required: true, message: "請輸入姓名!", trigger: "blur" },
        { max: 128, message: "長度不能超過128個字!", trigger: "blur" }
      ],
      birthday: [{ required: true, message: "請選擇生日!", trigger: "blur" }],
      gender: [
        { required: true, message: "請選擇性別!", trigger: "change" },
        { max: 1, message: "長度不能超過1個字!", trigger: "change" }
      ]
    })

    const res = (title = "", _type = "success") => {
      ElMessage({ message: title, type: _type })
    }

    const clear = () => {
      Object.assign(form, {
        id: "",
        name: "",
        birthday: "",
        gender: "男",
        updated_at: ""
      })
    }

    // 表單模式切換
    const mode = ref("add")
    const Add = () => {
      if (mode.value === "edit") {
        mode.value = "add"
        clear()
      }
      dialogFormVisible.value = true
    }

    const Edit = (_id) => {
      if (mode.value === "add") {
        mode.value = "edit"
      }
      clear()
      dialogFormVisible.value = true
      const edit_data = list.value.find((array) => array.id === _id)
      Object.assign(form, edit_data)
    }

    const handleSubmit = (formRef) => {
      formRef.validate((valid) => {
        if (valid) {
          if (mode.value === "add") Insert()
          else Update()
        } else {
          res("請確認表單是否符合格式!", "error")
        }
      })
    }

    // CRUD 實際操作
    const fetchData = (data) => {
      listLoading.value = true
      list.value = data
      fullList.value = data
      Search()
      listLoading.value = false
    }
    const Insert = () => {
      listLoading.value = true

      // 獲取最後的id
      const last = fullList.value[fullList.value.length - 1]
      form.id = parseInt(last.id) + 1 + ""

      // 更新日期
      let date = new Date()
      form.updated_at = date.toISOString().split("T")[0]

      // 插入
      fullList.value.push(JSON.parse(JSON.stringify(form)))
      fetchData(fullList.value)
      // 清除form
      clear()
      res("新增成功")
    }
    const Update = () => {
      listLoading.value = true

      const index = fullList.value.findIndex((d) => d.id === form.id)

      let date = new Date()
      form.updated_at = date.toISOString().split("T")[0]

      fullList.value[index] = JSON.parse(JSON.stringify(form))
      fetchData(fullList.value)
      dialogFormVisible.value = false
      // 清除form
      clear()
      res("更新成功")
    }
    const Delete = (_id) => {
      ElMessageBox.confirm("是否要刪除該筆資料?", "注意", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning"
      })
        .then(() => {
          listLoading.value = true
          const data = fullList.value.filter((d) => d.id !== _id)
          fetchData(data)
          res("刪除成功")
        })
        .catch(() => {})
    }

    // mounted後獲取資料
    onMounted(() => {
      fetchData(CRUD_data)
    })

    // 監聽搜尋欄位，根據關鍵字來搜尋
    const searchMap = reactive({ word: null })
    const Search = () => {
      listLoading.value = true
      if (searchMap.word !== null) {
        list.value = fullList.value.filter(
          (array) =>
            array.name.match(searchMap.word) ||
            array.gender.match(searchMap.word)
        )
      } else {
        list.value = fullList.value
      }
      listLoading.value = false
    }
    // reactive要用 () => $var, ref用$var
    watch(
      () => searchMap.word,
      () => {
        if (searchMap.word === "" || searchMap.word === null) Search()
      }
    )

    return {
      // ICON
      icon_delete,
      icon_edit,
      icon_search,
      // DATA
      list,
      fullList,
      // 控制狀態
      listLoading,
      dialogFormVisible,
      // 表單
      form,
      formRef,
      rules,
      // 分頁
      page,
      handleCurrentChange,
      handleSizeChange,
      // 提交模式
      mode,
      // 開啟表單
      Add,
      Edit,
      handleSubmit,
      // CRUD
      Insert,
      Update,
      Delete,
      // 關鍵字
      searchMap,
      Search
    }
  }
}
</script>

<style lang="less" scoped>
.CRUD {
  text-align: left;
  padding: 0 20px;

  .input {
    padding: 20px 0 0 0;
  }
  .pagination {
    padding: 20px 0;
    text-align: center;
    display: flex;
    justify-content: center;
  }
}
</style>
