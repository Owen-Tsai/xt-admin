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
      name: 'flow-designer',
      component: () => import('@/views/system/flow-designer/index.vue'),
      meta: {
        locale: 'menu.system.flow-designer',
        requireAuth: true,
      },
    },
  ],
}

export default systemRoutes
