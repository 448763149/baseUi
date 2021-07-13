/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-12 14:50:35
 * @detail: 
 * @change: 
 */

// 导入组件，组件必须声明 name
import hNotice from './index.vue'
 
// 为组件提供 install 安装方法，供按需引入
hNotice.install = function (app) {
  app.component(hNotice.name, hNotice)
}
 
// 默认导出组件
export default hNotice
