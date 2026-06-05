import './assets/main.css'

// Element Plus 的 Sass 主题样式（放在其他样式之后）
import 'element-plus/theme-chalk/src/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入初始化样式文件
import '@/styles/common.scss'

// // 测试接口函数
// import { getCategory } from './apis/testApi'

// getCategory().then(res => {
//   console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
