// vueUse提供的监听元素是否在视图的方法，用于实现懒加载
import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载插件
export const lazyPlugin = {
    install(app: any){
        app.directive('img-lazy', {
            mounted (el, binding) {
              // el: 指令绑定的那个元素 img
              // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
              console.log(el, binding.value)
               const {stop} = useIntersectionObserver(
                el,
                ([{ isIntersecting }]) => {
                  console.log(isIntersecting)
                  if (isIntersecting) {
                    // 进入视口区域
                    el.src = binding.value
                    stop()
                  }
                },
              )
            }
        })
    }
}