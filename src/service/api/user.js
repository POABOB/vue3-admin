import request from "../index"

export function requestLogin(data) {
  return request.post({
    url: "/login",
    data: data
  })
}

export function requestUserInfoByToken(token) {
  return request.get({
    url: `/users`,
    showLoading: false,
    params: { token }
  })
}

// export function requestUserMenuById(id) {
//   return request.get({
//     url: `/role/${id}/menu`,
//     showLoading: false
//   })
// }
