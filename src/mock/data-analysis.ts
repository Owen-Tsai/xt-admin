import Mock from 'mockjs'
import setupMock, {
  failedResponseWrap,
  responseWrap,
} from '@/utils/mock'
import { isAuthed } from '@/utils/auth'
import type { IAnalysis, ISeriesData, ITableList } from '../api/business'

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
const tableList = Mock.mock([
  {
    'key|+1': 1,
    'name': '@cname',
    'salary|10000-99999': 1,
    'address|10000-99999': 1,
  },
  {
    'key|+1': 2,
    'name': '@cname',
    'salary|10000-99999': 1,
    'address|10000-99999': 1,
  },
  {
    'key|+1': 3,
    'name': '@cname',
    'salary|10000-99999': 1,
    'address|10000-99999': 1,
  },
  {
    'key|+1': 4,
    'name': '@cname',
    'salary|10000-99999': 1,
    'address|10000-99999': 1,
  },
  {
    'key|+1': 5,
    'name': '@cname',
    'salary|10000-99999': 1,
    'address|10000-99999': 1,
  },
  {
    'key|+1': 6,
    'name': '@cname',
    'salary|10000-99999': 1,
    'address|10000-99999': 1,
  },
])
const xTime = Mock.mock([
  '0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'
])
const seriesData = Mock.mock(
  {
    Graphic: [],
    Writing: [],
    Video: []
  }
)
const Generate = () => {
  // console.log('1', seriesData.Graphic);
  for (let i = 0; i <= 11; i++) {
    seriesData.Graphic.push(Math.floor(Math.random() * 10000) + 1)
    seriesData.Writing.push(Math.floor(Math.random() * 10000) + 1)
    seriesData.Video.push(Math.floor(Math.random() * 10000) + 1)
  }
  // console.log(seriesData);
}
const bigSeriesData = Mock.mock(
  {
    Graphic: [],
    Writing: [],
    Video: []
  }
)
// console.log(getrandom(5, 1))
const Generates = () => {
  for (let i = 0; i <= 12; i++) {
    bigSeriesData.Graphic.push(Math.floor(Math.random() * 100) + 1)
    bigSeriesData.Writing.push(Math.floor(Math.random() * 100) + 1)
    bigSeriesData.Video.push(Math.floor(Math.random() * 100) + 1)
  }
}
Generates()
Generate()
setupMock({
  setup() {
    Mock.mock(new RegExp('/api/get-data-analysis'), () => {
      if (isAuthed()) {
        return responseWrap<IAnalysis[]>(randomList)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-data-table-list'), () => {
      if (isAuthed()) {
        return responseWrap<ITableList[]>(tableList)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-x-time'), () => {
      if (isAuthed()) {
        return responseWrap<any[]>(xTime)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-series-data'), () => {
      if (isAuthed()) {
        return responseWrap<ISeriesData>(seriesData)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
    Mock.mock(new RegExp('/api/get-big-series-data'), () => {
      if (isAuthed()) {
        return responseWrap<ISeriesData>(bigSeriesData)
      }
      return failedResponseWrap(null, '未登录', 50000)
    })
  }
})
