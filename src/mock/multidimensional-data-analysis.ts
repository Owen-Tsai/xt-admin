import Mock from 'mockjs'
import dayjs from 'dayjs'
import setupMock, {
  failedResponseWrap,
  responseWrap,
} from '@/utils/mock'
import { isAuthed } from '@/utils/auth'
import type {
  DataScreening, IOverviewData, IAction, IDistributionData, IUserContent, ISourceData
} from '../api/business'
import { getXTime } from '@/api/data-analysis'

dayjs().format()
const list = Mock.mock({
  XTime: [],
  Production: [],
  Click: [],
  Exposure: [],
  User: [],
})
// console.log(list)
const time = () => {
  for (let i = 0; i <= 9; i++) {
    list.XTime.push(`${dayjs().month() + 1}-${dayjs().date() - i}`)
  }
}
time()

const content = Mock.mock([
  {
    'name': '内容生产量',
    'volume|1000-9999': 1
  },
  {
    'name': '内容点击量',
    'volume|1000-9999': 1
  },
  {
    'name': '内容曝光量',
    'volume|1000-9999': 1
  },
  {
    'name': '活跃用户数',
    'volume|1000-9999': 1
  },
])

const action = Mock.mock([
  {
    'share|1000-9999': 1,
    'name': '分享量',
  },
  {
    'name': '评论量',
    'share|1000-9999': 1,
  },
  {
    'name': '点赞量',
    'share|1000-9999': 1
  },
])
const distrilist = Mock.mock([
  {
    'name': '国际',
    'max': 100
  },
  {
    'name': '娱乐',
    'max': 100
  },
  {
    'name': '科技',
    'max': 100
  },
  {
    'name': '财经',
    'max': 100
  },
  {
    'name': '体育',
    'max': 100
  },
  {
    'name': '其他',
    'max': 100
  },
])
const distribution = Mock.mock([
  {
    'name': '纯文本',
    'value': []
  },
  {
    'name': '图文类',
    'value': []
  },
  {
    'name': '视频类',
    'value': []
  },
])

const userContentList = Mock.mock([
  {
    'name': '用户留存趋势',
    'odd|1000-9999': 1,
    'edd|100-999': 1,
    'isgrowth': Mock.Random.boolean()
  },
  {
    'name': '用户留存量',
    'odd|1000-9999': 1,
    'edd|100-999': 1,
    'isgrowth': Mock.Random.boolean()
  },
  {
    'name': '内容消费趋势',
    'odd|1000-9999': 1,
    'edd|100-999': 1,
    'isgrowth': Mock.Random.boolean()
  },
  {
    'name': '内容消费量',
    'odd|1000-9999': 1,
    'edd|100-999': 1,
    'isgrowth': Mock.Random.boolean()
  }
])

const sourceList = Mock.mock([
  {
    'name': 'UGC原创',
    'value|100000-999999': [1],
    'itemStyle': {
      'color': '#249EFF'
    },
  },
  {
    'name': '国外网站',
    'value|100000-999999': [1],
    'itemStyle': {
      'color': '#249EFF'
    },
  },
  {
    'name': '转载文章',
    'value|100000-999999': [1],
    'itemStyle': {
      'color': '#249EFF'
    },
  },
  {
    'name': 'UGC原创',
    'value|100000-999999': [1],
    'itemStyle': {
      'color': '#249EFF'
    },
  },
  {
    'name': '行业报告',
    'value|100000-999999': [1],
    'itemStyle': {
      'color': '#249EFF'
    },
  },
  {
    'name': '其他',
    'value|100000-999999': [1],
    'itemStyle': {
      'color': '#249EFF'
    },
  },
])
const Generates = () => {
  for (let i = 0; i <= 9; i++) {
    list.Production.push(Math.floor(Math.random() * 10000) + 1)
    list.Click.push(Math.floor(Math.random() * 10000) + 1)
    list.Exposure.push(Math.floor(Math.random() * 10000) + 1)
    list.User.push(Math.floor(Math.random() * 10000) + 1)
  }
}
const isentertainment = () => {
  // console.log(distribution)
  for (let i = 0; i < 3; i++) {
    for (let m = 0; m < 6; m++) {
      distribution[i].value.push(Math.floor(Math.random() * 100) + 1)
    }
  }
}
isentertainment()
Generates()
setupMock({
  setup() {
    Mock.mock(new RegExp('/api/get-data-screening'), () => {
      if (isAuthed()) {
        return responseWrap<DataScreening[]>(content)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-data-list-time'), () => {
      if (isAuthed()) {
        return responseWrap<IOverviewData>(list)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-data-action'), () => {
      if (isAuthed()) {
        return responseWrap<IAction[]>(action)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-data-distribution'), () => {
      if (isAuthed()) {
        return responseWrap<IDistributionData[]>(distribution)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-data-user-content'), () => {
      if (isAuthed()) {
        return responseWrap<IUserContent[]>(userContentList)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-data-distri-list'), () => {
      if (isAuthed()) {
        return responseWrap<IDistributionData[]>(distrilist)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
  }
})
