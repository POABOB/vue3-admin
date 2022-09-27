<template>
  <div class="base ckeditor">
    <ckeditor :editor="editor" v-model="data" :config="config"></ckeditor>
  </div>
</template>

<script>
import { ref } from "vue"
import Editor from "@/components/CKEditor"
import { CKEditorData } from "./data"
export default {
  components: {
    ckeditor: Editor.ckeditor
  },
  setup() {
    const data = ref(CKEditorData)

    const getData = () => {
      console.log(data)
    }
    return {
      editor: Editor.editor,
      config: Editor.config,
      data,
      getData
    }
  }
}
</script>

<style lang="less" scoped>
.ckeditor {
  padding: 50px 5px 20px;
}
</style>
