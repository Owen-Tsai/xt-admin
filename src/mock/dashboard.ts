import Mock from 'mockjs'
import setupMock, { responseWrap, failedResponseWrap } from '@/utils/mock'
import { isAuthed } from '@/utils/auth'
import type {
  DataPanelItem,
  TalentChartData,
  TodoTableItem,
} from '@/api/dashboard'

const chartDataTemplate = Mock.mock({
  'list|12': [
    {
      'x|+1': 1,
      'y|1000-3000': 1,
    },
  ],
})

const todoTableTemplate = Mock.mock({
  'list|4': [
    {
      'title': '业务的名称',
      'progress|1-100': 14,
      'todo|1-30': 12,
    },
  ],
})

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/dashboard/get-data'), () => {
      if (isAuthed()) {
        return responseWrap<DataPanelItem>({
          talent: Mock.Random.integer(328000, 332000),
          consultation: Mock.Random.integer(200, 400),
          fund: Mock.Random.float(100.0, 300.0),
          storage: Mock.Random.float(20, 40),
        })
      }
      return failedResponseWrap(null, '未登录', 50000)
    })

    Mock.mock(new RegExp('/api/dashboard/get-chart-data'), () => {
      if (isAuthed()) {
        return responseWrap<TalentChartData>(chartDataTemplate.list)
      }

      return failedResponseWrap(null, '未登录', 50000)
    })

    Mock.mock(new RegExp('/api/dashboard/get-todo-table'), () => {
      if (isAuthed()) {
        return responseWrap<TodoTableItem[]>(todoTableTemplate.list)
      }

      return failedResponseWrap(null, '未登录', 50000)
    })
  },
})
