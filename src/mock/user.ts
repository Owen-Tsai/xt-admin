import Mock from 'mockjs'
import setupMock, {
  responseWrap,
  failedResponseWrap
} from '@/utils/mock'
import { isAuthed } from '@/utils/auth'
import avatarExample from '@/assets/avatar-user.png'

import type { MockParams } from './types'

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/user/login'), (params: MockParams) => {
      const { username, password } = JSON.parse(params.body)
      if (!username) {
        return failedResponseWrap(null, '请填写用户名', 50000)
      }
      if (!password) {
        return failedResponseWrap(null, '请填写密码', 50000)
      }

      if (username === 'admin' && password === 'admin') {
        window.localStorage.setItem('userRole', 'admin')
        return responseWrap({
          token: 'admin12345'
        })
      }
      if (username === 'user' && password === 'user') {
        window.localStorage.setItem('userRole', 'user')
        return responseWrap({
          token: 'user12345'
        })
      }

      return failedResponseWrap(null, '用户名或密码错误', 50000)
    })

    Mock.mock(new RegExp('/api/user/info'), () => {
      if (isAuthed()) {
        const role = window.localStorage.getItem('userRole') || 'admin'
        return responseWrap({
          name: '蔡仲晨',
          avatar: avatarExample,
          email: 'owentsai.v@gmail.com',
          job: '前端工程师',
          dept: '软件部',
          role
        })
      }

      return failedResponseWrap(null, '未登录', 50008)
    })

    Mock.mock(new RegExp('/api/user/logout'), () => {
      if (isAuthed()) {
        return responseWrap({})
      }

      return failedResponseWrap(null, '未登录', 50008)
    })
  }
})
