import baseUi from '../components/index.js'
import iconfont from '../components/icon/iconfont.css'
import global from '../components/styles/global.scss'

export default ({
	Vue // VuePress 正在使用的 Vue 构造函数
}) => {
	Vue.use(baseUi,iconfont,global)
}