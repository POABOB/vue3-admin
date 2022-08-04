var Mock = require("mockjs")
// User
// Login
Mock.mock("/api/login", {
  code: 200,
  message: null,
  data: {
    "id|1-100": 1,
    "name|1": "@word(5)",
    "token|1": "token-" + "@word(50)"
  }
})

Mock.mock(/api\/users[\s\S]*?/, {
  code: 200,
  message: null,
  data: {
    "id|1-100": 1,
    "name|1": "@word(5)",
    roles: ["admin"],
    "avatar|1":
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
  }
})
