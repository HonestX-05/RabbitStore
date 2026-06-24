import httpInstance from '@/utils/http'


export function getBannerApi(parmas = {}) {
    // 默认为1，商品为2
    const {distributionSite = '1'} = parmas
    return httpInstance({
        url: '/home/banner',
        params: {
          distributionSite
        }
    })
}

export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
}

export const getHotAPI = () => {
  return  httpInstance({
    url:'home/hot', 
  })
}

export const getGoodsApi = () => {
  return httpInstance({
    url: 'home/goods'
  })
}