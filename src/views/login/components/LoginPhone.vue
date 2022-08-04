<template>
  <el-form
    :rules="rules"
    label-width="80px"
    :model="phone"
    size="large"
    ref="formRef"
  >
    <el-form-item label="手機號碼" prop="number" class="label">
      <el-input v-model="phone.number" id="number" />
    </el-form-item>
    <el-form-item label="驗證碼" prop="code">
      <div class="getCode">
        <el-input v-model="phone.code" id="code" />
        <el-button type="primary" class="codeBtn">獲取驗證碼</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref } from "vue"
// 表單驗證規則
import { rules } from "../config/phoneConfig"
export default {
  setup() {
    // 手機 驗證碼
    const phone = reactive({
      number: "",
      code: ""
    })
    const formRef = ref()
    const handleLogin = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log("手機登入中", valid)
        }
      })
    }

    return {
      formRef,
      rules,
      phone,
      handleLogin
    }
  }
}
</script>

<style lang="less" scoped>
label {
  line-height: 22px !important;
}
.el-form-item__label {
  line-height: 22px !important;
}
.getCode {
  display: flex;
  .codeBtn {
    margin-left: 5px;
  }
}
</style>
