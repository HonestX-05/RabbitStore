// 通过插件的方式将components中的所有组件进行全局化注册
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
    install: (app) => {
        // app.component('componentName', componentObject)
        app.component('XtxImageView', ImageView)
        app.component('XtxSku', Sku)
    }
}