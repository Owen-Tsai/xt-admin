import { defaultLayout } from '@/router/constants'
import type { AppRouteRecordRaw } from '../../types'

const formRoutes: AppRouteRecordRaw = {
  path: '/form',
  name: 'form',
  component: defaultLayout,
  meta: {
    icon: 'icon-file',
    requireAuth: true,
    order: 1,
    locale: 'menu.form'
  },
  children: [
    {
      path: 'complex-step',
      name: 'complex-step',
      component: () => import('@/views/form/complex-step/index.vue'),
      meta: {
        locale: 'menu.form.complex-step',
        requireAuth: true,
        role: ['*']
      }
    }
  ]
}

export default formRoutes
