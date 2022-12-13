import { defineStore } from 'pinia'
import {
  login as doLogin,
  logout as doLogout,
  LoginData,
  getUserInfo,
  // getUserInfo
} from '@/api/user'
import { clearToken, isAuthed, setToken } from '@/utils/auth'
import { removeListener } from '@/utils/route-listener'
import { UserRole } from '@config'
import useMenuStore from './menu'

export interface UserState {
  realname?: string
  dept?: string
  role: UserRole
  avatar?: string
  job?: string
  email?: string
}

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    realname: undefined,
    dept: undefined,
    role: '',
    avatar: undefined,
    email: undefined,
    job: undefined,
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state }
    },
  },

  actions: {
    setInfo(info: Partial<UserState>) {
      this.$patch(info)
    },
    resetInfo() {
      this.$reset()
    },
    async info() {
      // console.log(isAuthed());
      if (isAuthed()) {
        const res = await getUserInfo()
        this.setInfo(res.data.userInfo)
      }
    },
    async login(data: LoginData) {
      try {
        const res = await doLogin(data)
        setToken(res.data.token)
      } catch (err) {
        clearToken()
        throw err
      }
    },
    async logout() {
      try {
        await doLogout()
      } finally {
        const menuStore = useMenuStore()
        menuStore.clearAsyncMenu()
        clearToken()
        removeListener()
        this.resetInfo()
      }
    },
  },
})

export default useUserStore
