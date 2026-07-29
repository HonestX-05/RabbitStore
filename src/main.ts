import './assets/main.css'

// Element Plus 的 Sass 主题样式（放在其他样式之后）
import 'element-plus/theme-chalk/src/index.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import {lazyPlugin} from './directives'
import { componentPlugin } from '@/components'

// 导入pinia-plugin-persistedstate插件
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 导入初始化样式文件
import '@/styles/common.scss'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
