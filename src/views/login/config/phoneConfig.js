// 表單驗證規則
export const rules = {
  number: [
    {
      required: true,
      message: "手機號碼不可為空!",
      trigger: "blur"
    },
    {
      pattern: /^[0-9]{10,11}$/,
      message: "手機號碼格式錯誤!",
      trigger: "blur"
    }
  ],
  code: [
    {
      required: true,
      message: "驗證碼不可為空!",
      trigger: "blur"
    },
    {
      pattern: /^[A-Za-z0-9]{4}$/,
      message: "驗證碼格式錯誤!",
      trigger: "blur"
    }
  ]
}
