import { AppRouteRecordRaw } from '../../types'

const listRoutes: AppRouteRecordRaw = {
  path: '/sub-system',
  name: 'sub-system',
  component: () => import('@/layout/system-a.vue'),
  redirect: '/sub-system/main',
  meta: {
    locale: 'menu.sub-system',
    requireAuth: true,
    order: 0,
    hideChildrenInMenu: true,
    icon: 'icon-star',
    openInNewWindow: true
  },
  children: [
    {
      path: 'main',
      name: 'sub-system-a-main',
      component: () => import('@/views/dashboard/monitor.vue'),
      meta: {
        locale: 'menu.sub-system.main',
        requireAuth: true,
        rules: ['*'],
      }
    }
  ]
}

export default listRoutes
