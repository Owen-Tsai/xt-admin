import Mock, { Random } from 'mockjs'
import setupMock, {
  responseWrap
} from '@/utils/mock'

setupMock({
  setup() {
    Mock.mock(new RegExp('/get-from-tab'), () => responseWrap([
      {
        'name': Random.cname(),
        'number': Random.integer(10000, 99999),
        'department': `${Random.province()}-${Random.city()}-${Random.county()}`,
      },
      {
        'name': Random.cname(),
        'number': Random.integer(10000, 99999),
        'department': `${Random.province()}-${Random.city()}-${Random.county()}`,
      },
      {
        'name': Random.cname(),
        'number': Random.integer(10000, 99999),
        'department': `${Random.province()}-${Random.city()}-${Random.county()}`,
      },
      {
        'name': Random.cname(),
        'number': Random.integer(10000, 99999),
        'department': `${Random.province()}-${Random.city()}-${Random.county()}`,
      },
    ]))
  }
})
