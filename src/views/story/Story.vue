<template>
  <div>
    <div class="story">
      <el-row :gutter="20">
        <el-col
          v-for="d in data"
          :key="d.name + d.date"
          :xs="24"
          :md="12"
          :lg="8"
          style="margin-bottom: 20px"
        >
          <el-card :body-style="{ padding: '10px' }">
            <div
              style="padding: 14px; cursor: pointer"
              @click="openDialog(d.date, d.name)"
            >
              <el-image
                style="width: 100%; height: 100%; max-height: 300px"
                :src="d.thumb"
                :fit="'scale-down'"
                class="image"
              />
            </div>
            <div style="padding: 14px">
              <div class="bottom">
                <el-button
                  text
                  class="button"
                  @click="openDialog(d.date, d.name)"
                >
                  <span class="word">{{ d.date }} {{ d.name }}</span>
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="storyDialog">
      <el-dialog
        v-model="dialogVisible"
        :title="dialog.name"
        width="70%"
        :before-close="handleClose"
        top="5vh"
        class="dialogSize"
      >
        <div class="storyDialogContent">
          <div v-html="dialog.title"></div>
          <div style="width: 100%" data-gramm="false" contenteditable="false">
            <div v-html="dialog.content"></div>
            <el-image
              :preview-src-list="[dialog.image]"
              :src="dialog.image"
              alt="img"
            />
            <el-row :gutter="20">
              <el-col
                v-for="(i, index) in dialog.images"
                :key="i"
                :xs="24"
                :md="12"
              >
                <el-image
                  :preview-src-list="dialog.images"
                  :initial-index="index"
                  :src="i"
                  alt="img"
                />
              </el-col>
            </el-row>
            <div v-html="dialog.content2"></div>
          </div>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">
              關閉
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { ElMessageBox } from "element-plus"
import { storyData } from "./data"
export default {
  setup() {
    const dialogVisible = ref(false)
    const data = ref(storyData)
    const dialog = ref(data.value[0])

    const openDialog = (date = "2020-06-15", name = "薪資考勤系統") => {
      dialog.value = data.value.find(
        (item) => item.date === date && item.name === name
      )
      dialogVisible.value = true
    }

    const handleClose = (done) => {
      ElMessageBox.confirm("是否要關閉視窗?", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning",
        center: true,
        customStyle: "width: 300px"
      })
        .then(() => {
          done()
        })
        .catch(() => {})
    }
    return { data, dialogVisible, dialog, openDialog, handleClose }
  }
}
</script>

<style lang="less" scoped>
span.word {
  font-size: 1.4rem;
  font-weight: 500;
}

.storyDialog {
  text-align: left;

  .storyDialogContent {
    padding: 5px 20px;

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    .center {
      text-align: center;
    }
  }
}
</style>
