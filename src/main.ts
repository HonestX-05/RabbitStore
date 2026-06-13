import './assets/main.css'

// Element Plus 的 Sass 主题样式（放在其他样式之后）
import 'element-plus/theme-chalk/src/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入初始化样式文件
import '@/styles/common.scss'
// vueUse提供的监听元素是否在视图的方法，用于实现懒加载
import { useIntersectionObserver } from '@vueuse/core'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 懒加载指令逻辑
app.directive('img-lazy', {
    mounted (el, binding) {
      // el: 指令绑定的那个元素 img
      // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
      console.log(el, binding.value)
       useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          console.log(isIntersecting)
          if (isIntersecting) {
            // 进入视口区域
            el.src = binding.value
          }
        },
      )
    }
  })
