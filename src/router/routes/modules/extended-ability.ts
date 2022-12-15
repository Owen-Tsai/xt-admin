import { fullPageLayout } from '@/router/constants'
import { AppRouteRecordRaw } from '../../types'

const exAbilityRoutes: AppRouteRecordRaw = {
  path: '/extended',
  name: 'extended-abilities',
  component: fullPageLayout,
  meta: {
    locale: 'menu.extended-ability',
    order: 5,
    requireAuth: true,
    icon: 'icon-scissor',
    openInNewWindow: true,
  },
  children: [
    {
      path: 'form-designer',
      name: 'extended.form-designer',
      component: () => import('@/views/extended/form-designer/index.vue'),
      meta: {
        locale: 'menu.extended-ability.form-designer',
        requireAuth: true,
        openInNewWindow: true,
      },
    },
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

export default exAbilityRoutes
