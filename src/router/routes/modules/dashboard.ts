import { defaultLayout } from '@/router/constants'
import { AppRouteRecordRaw } from '../../types'

const dashboardRoutes: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: defaultLayout,
  meta: {
    title: '工作台',
    requireAuth: true,
    order: 0,
    icon: 'icon-apps'
  },
  children: [
    {
      path: 'workplace',
      name: 'workplace',
      component: () => import('@/views/dashboard/workplace.vue'),
      meta: {
        title: '主页',
        requireAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'monitor',
      name: 'monitor',
      component: () => import('@/views/dashboard/monitor.vue'),
      meta: {
        title: '监控页',
        requireAuth: true,
        roles: ['admin']
      }
    },
  ]
}

export default dashboardRoutes
