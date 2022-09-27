// 导入mock模块
import Mock from 'mockjs'
import setupMock, {
  failedResponseWrap,
  responseWrap,
} from '@/utils/mock'
import { isAuthed } from '@/utils/auth'
import type { falsedata, userinfo, step } from '../api/business'

const suiji1 = Mock.mock({
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
const userinfo = Mock.mock({
  'uname': '@cname',
  'membershipnumber|10000000000000000000-99999999999999999999': 1,
  'identitycard': '@city(true)',
  'contactinformation|10000000000-99999999999': 1,
  'contactaddress': '@csentence(10)',
  'messageblock': [
    { 'uname': '@cname', 'unamedata': '@date(yyyy-MM-dd)' },
    { 'uname': '@cname', 'unamedata': '@date(yyyy-MM-dd)' },
    {
      'Multilayerinformationgroup': [
        {
          'Groupname': '@cname',
          'principal': '@cname',
          'Charactercode|100000-999999': 1,
          'department': '@csentence(10)',
          'expirationtime': '@date(yyyy-MM-dd)',
          'describe': '@csentence(10)'
        },
        {
          'Groupname': '@cname',
          'principal': '@cname',
          'Charactercode|100000-999999': 1,
          'department': '@csentence(10)',
          'expirationtime': '@date(yyyy-MM-dd)',
          'describe': '@csentence(10)'
        },
        {
          'Groupname': '@cname',
          'principal': '@cname',
          'Charactercode|100000-999999': 1,
          'department': '@csentence(10)',
          'expirationtime': '@date(yyyy-MM-dd)',
          'describe': '@csentence(10)'
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
const flows = Mock.mock({ 'atpresent': 2 },)
setupMock({
  setup() {
    Mock.mock(new RegExp('/api/get_user_data'), () => {
      if (isAuthed()) {
        return responseWrap<falsedata>(suiji1)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get_userinfo'), () => {
      if (isAuthed()) {
        return responseWrap<userinfo>(userinfo)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get_step'), () => {
      if (isAuthed()) {
        return responseWrap<step>(flow)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/atpresent'), () => {
      if (isAuthed()) {
        return responseWrap<step>(flows)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
  }
})
