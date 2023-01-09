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
      path: 'department-management',
      name: 'department-management',
      component: () => import('@/views/system/department-management/index.vue'),
      meta: {
        locale: 'menu.system.department-management',
        requireAuth: true,
      },
    },
  ],
}

export default systemRoutes
