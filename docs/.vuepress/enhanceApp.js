import baseUi from '../components/index.js'
import global from '../components/icon/iconfont.css'

export default ({
	Vue // VuePress 正在使用的 Vue 构造函数
}) => {
	Vue.use(baseUi,global)
}