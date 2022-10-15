import { defaultLayout } from '@/router/constants'
import { AppRouteRecordRaw } from '../../types'

const complexdRoutes: AppRouteRecordRaw = {
  path: '/complex',
  name: 'complex',
  component: defaultLayout,
  redirect: '/complex/detailspage',
  meta: {
    locale: 'menu.complex',
    requireAuth: true,
    order: 3,
    icon: 'icon-apps',
  },
  children: [
    {
      path: 'detailspage',
      name: 'detailspage',
      component: () => import('@/views/complex/AdvancedDetailPage/index.vue'),
      meta: {
        locale: 'menu.complex.detailspage',
        requireAuth: true,
        roles: ['*'],
      }
    },
  ]
}

export default complexdRoutes
