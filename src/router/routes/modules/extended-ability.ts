import { defaultLayout } from '@/router/constants'
import { AppRouteRecordRaw } from '../../types'

const exAbilityRoutes: AppRouteRecordRaw = {
  path: '/extended',
  name: 'extended-abilities',
  component: defaultLayout,
  meta: {
    locale: 'menu.extended-ability',
    order: 5,
    requireAuth: true,
    icon: 'icon-scissor'
  },
  children: [
    {
      path: 'form-designer',
      name: 'extended.form-designer',
      component: () => import('@/views/extended/form-designer/index.vue'),
      meta: {
        locale: 'menu.extended-ability.form-designer',
        requireAuth: true
      }
    },
  ]
}

export default exAbilityRoutes
