import Mock from 'mockjs'
import setupMock, { responseWrap } from '@/utils/mock'

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/dept/get-depts'), () =>
      responseWrap([
        { label: '体验科技事业部', value: 1 },
        { label: '软件业务部', value: 2 },
        { label: '研发支持事业部', value: 4 },
        { label: '技术风险部', value: 5 },
      ])
    )
  },
})
