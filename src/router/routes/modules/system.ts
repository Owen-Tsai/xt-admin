import { defaultLayout } from '@/router/constants'
import { AppRouteRecordRaw } from '@/router/types'

const systemRoutes: AppRouteRecordRaw = {
  path: '/system',
  name: 'system',
  component: defaultLayout,
  meta: {
    locale: 'menu.system',
    order: 5,
    requireAuth: true,
    icon: 'icon-settings',
  },
  children: [
    {
      path: 'flow-designer',
      name: 'extended.flow-designer',
      component: () => import('@/views/extended/flow-designer/index.vue'),
      meta: {
        locale: 'menu.extended-ability.flow-designer',
        requireAuth: true,
      }
    }
  ]
}
