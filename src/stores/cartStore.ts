// 封装购物车模块

import  { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

export const useCartStore = defineStore('cart', () => {
    // 1. 定义state
    const cartList = ref([])
    // 2. 定义action
    const addCart = (goods) => {
        const item = cartList.value.find((item) => item.skuId === goods.skuId)
        if (item) {
            item.count += goods.count
        } else {
            cartList.value.push(goods)
        }
    }

    // 删除购物车商品
    const delCart = (skuId) => {
        const index = cartList.value.findIndex((item) => item.skuId === skuId)
        if (index !== -1) {
            cartList.value.splice(index, 1)
            ElMessage.success('删除成功')
        } else {
            ElMessage.warning('商品不存在')
        }
    }

    // 计算总数和总价
    const allCount = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))
    const allPrice = computed(() => cartList.value.reduce((sum, item) => sum + item.count * item.price, 0))
    return{
        cartList,
        allCount,
        allPrice,
        addCart,
        delCart
    }
})