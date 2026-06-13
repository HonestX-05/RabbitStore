import './assets/main.css'

// Element Plus 的 Sass 主题样式（放在其他样式之后）
import 'element-plus/theme-chalk/src/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {lazyPlugin} from './directives'

// 导入初始化样式文件
import '@/styles/common.scss'




const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
