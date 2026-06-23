import request from '@/utils/http'


export function getCategoryApi(id: number) {
    return request({
        url: '/category',
        params:{ 
            id
        }
    })
}