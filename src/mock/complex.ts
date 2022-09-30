// 导入mock模块
import Mock from 'mockjs'
import setupMock, {
  failedResponseWrap,
  responseWrap,
} from '@/utils/mock'
import { isAuthed } from '@/utils/auth'
import type { FalseData, UserInfo, Step } from '../api/business'

const randomList = Mock.mock({
  'name': '@cname',
  'odd|1000000-9999999': 1,
  'products': '@cword',
  'creationtime': '@date(yyyy-MM-dd)',
  'documents|100000-999999': 1,
  'effectivedate': '@date(yyyy-MM-dd)',
  'remark': '@csentence(8)',
  'money|1000-9999': 1,
  'examineapprove|1': '待审批'
})
const userInfo = Mock.mock({
  'uname': '@cname',
  'membershipNo|10000000000000000000-99999999999999999999': 1,
  'identityCard': '@city(true)',
  'contactInfo|10000000000-99999999999': 1,
  'address': '@csentence(10)',
  'infoGroups': [
    { 'updateTime': '@date(yyyy-MM-dd)' },
    {
      'groupsData': [
        {
          'Groupnamename': '@cname',
          'supervisor': '@cname',
          'code|100000-999999': 1,
          'dept': '@csentence(10)',
          'time': '@date(yyyy-MM-dd)',
          'desc': '@csentence(10)'
        },
        {
          'Groupnamename': '@cname',
          'supervisor': '@cname',
          'code|100000-999999': 1,
          'dept': '@csentence(10)',
          'time': '@date(yyyy-MM-dd)',
          'desc': '@csentence(10)'
        },
        {
          'Groupnamename': '@cname',
          'supervisor': '@cname',
          'code|100000-999999': 1,
          'dept': '@csentence(10)',
          'time': '@date(yyyy-MM-dd)',
          'desc': '@csentence(10)'
        },
      ]
    }
  ]
})
const flow = Mock.mock([
  { 'name': '@cname', 'title': '创建项目', 'data': '@date(yyyy-MM-dd)' },
  {
    'name': '@cname', 'title': '部门初审', 'remark': '催一下'
  },
  { 'title': '财务复核' },
  { 'title': '完成', },
])
const flows = Mock.mock({ 'atpresent': 2 })
setupMock({
  setup() {
    Mock.mock(new RegExp('/api/get-user-data'), () => {
      if (isAuthed()) {
        return responseWrap<FalseData>(randomList)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-user-info'), () => {
      if (isAuthed()) {
        return responseWrap<UserInfo>(userInfo)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-step'), () => {
      if (isAuthed()) {
        return responseWrap<Step[]>(flow)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/at-present'), () => {
      if (isAuthed()) {
        return responseWrap<Step>(flows)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
  }
})
