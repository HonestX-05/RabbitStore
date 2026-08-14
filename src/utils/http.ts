// axios基础封装

import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const httpInstance = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})

// 拦截器
httpInstance.interceptors.request.use(config => {
    // 1. 从pinia中获取用户信息
    const userStore = useUserStore()
    // 2. 统一添加token到请求头
    const token = userStore.userInfo.token
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    // 3. 返回配置对象
    return config
}, e => Promise.reject(e))
  
  // axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage.warning(e.response.data.msg)

    // 处理401，token校验失败问题
    const userStore = useUserStore()
    const router = useRouter()
    // 清除用户信息并跳转登录页，登录重新获取token
    if(e.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }

    return Promise.reject(e)
})

export default httpInstance