import { createApp } from 'vue'
import Arco from '@arco-design/web-vue'
import ArcoIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './mock'
import './api/request'

import '@/styles/tailwindcss.scss'
import '@arco-design/web-vue/dist/arco.css'
import '@/styles/index.scss'

import SIcon from '@/components/s-icon.vue'

const app = createApp(App)

app.use(Arco)
app.use(router)
app.use(store)
app.use(ArcoIcon)

app.component('SIcon', SIcon)

app.mount('#app')
