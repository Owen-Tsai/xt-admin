import { createPinia } from 'pinia'
// import all store modules
import useUserStore from './modules/user'
import useMenuStore from './modules/menu'

const pinia = createPinia()

export {
  useUserStore,
  useMenuStore
}
export default pinia
