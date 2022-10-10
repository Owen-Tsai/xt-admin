import { defaultLayout } from '@/router/constants'
import { AppRouteRecordRaw } from '../../types'

const visualizationRoutes: AppRouteRecordRaw = {
  path: '/visualization',
  name: 'data-visualization',
  component: defaultLayout,
  meta: {
    locale: 'menu.data-visualization',
    requireAuth: true,
    order: 0,
    icon: 'icon-apps',
  },
  children: [
    {
      path: 'data-analysis',
      name: 'data-analysis',
      component: () => import('@/views/visualization/data-analysis/index.vue'),
      meta: {
        locale: 'menu.data-visualization.data-analysis',
        requireAuth: true,
        roles: ['*'],
      }
    },
    {
      path: 'multidimensional-data-analysis',
      name: 'multidimensional-data-analysis',
      component: () => import('@/views/visualization/multidimensional-data-analysis/index.vue'),
      meta: {
        locale: 'menu.data-visualization.multidimensional-data-analysis',
        requireAuth: true,
        role: ['*']
      }
    }
  ]
}

export default visualizationRoutes
