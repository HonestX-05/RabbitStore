// 封装购物车模块

import  { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // 1. 定义state
    const cartList = ref([])    // 2. 定义action
    const addCart = (goods) => {
        const item = cartList.value.find((item) => item.skuId === goods.skuId)
        if (item) {
            item.count += goods.count
        } else {
            cartList.value.push(goods)
        }
    }

    return{
        cartList,
        addCart
    }
})