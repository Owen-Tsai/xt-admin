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
  children: [],
}

export default systemRoutes
