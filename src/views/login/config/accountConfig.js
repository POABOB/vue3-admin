// 表單驗證規則
export const rules = {
  name: [
    {
      required: true,
      message: "帳號不可為空!",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "帳號必須是5~10個字母或數字!",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密碼不可為空!",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "密碼必須是3個以上字母或數字!",
      trigger: "blur"
    }
  ]
}
