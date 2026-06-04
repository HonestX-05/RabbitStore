// Element Plus 的 Sass 主题变量覆盖（必须放在样式导入之前）
@use '@/styles/element/index.scss' as *;

// Element Plus 的 Sass 样式
@import 'element-plus/theme-chalk/src/index.scss';

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
