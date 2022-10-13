import Mock from 'mockjs'
import setupMock, {
  failedResponseWrap,
  responseWrap,
} from '@/utils/mock'
import { isAuthed } from '@/utils/auth'
import type { IAnalysis } from '../api/business'

const randomList = Mock.mock([
  {
    'name': '访问总人数',
    'odd|1000-9999': 1,
    'edd|100-999': 1,
    'isgrowth': Mock.Random.boolean()
  },
  {
    'name': '内容发布量',
    'odd|1000-9999': 1,
    'edd|100-999': 1,
    'isgrowth': Mock.Random.boolean()
  },
  {
    'name': '评论总量',
    'odd|1000-9999': 1,
    'edd|100-999': 1,
    'isgrowth': Mock.Random.boolean()
  },
  {
    'name': '分享总量',
    'odd|1000-9999': 1,
    'edd|100-999': 1,
    'isgrowth': Mock.Random.boolean()
  }
])
setupMock({
  setup() {
    Mock.mock(new RegExp('/api/get-data-analysis'), () => {
      if (isAuthed()) {
        return responseWrap<IAnalysis[]>(randomList)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
  }
})
