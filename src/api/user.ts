import axios from 'axios'

export interface LoginData {
  username: string
  password: string
  captcha: string
  checkKey: string | number
}
export interface UserInfo {
  realname?: string
  avatar?: string
  email?: string
}
export interface LoginRes {
  token: string
  userInfo: UserInfo
}

export const login = (data: LoginData) =>
  axios.post<LoginRes>('/sys/login', data)
export const getUserInfo = () => axios.get('/sys/user/getUserInfo')
export const getMenu = () => axios.get('/api/user/menu')
export const logout = () => axios.post('/sys/logout')
export const randomImage = (data: number) =>
  axios.get(`/sys/randomImage/${data}`)
// export const userPermission = () => axios.get('/sys/permission/userPermission')
