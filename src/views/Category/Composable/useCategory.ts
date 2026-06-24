import { getCategoryApi } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategore() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryApi(id)
        categoryData.value = res.result
    }

    onMounted( () => getCategory() )

    // 路由参数发生变化时，重新发送接口数据来更新视图
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}