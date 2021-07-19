### 轮播公告
::: demo 
```html
<template>
  <h-notice types="bottom">
	  <div slot="notice" class="h-notice-left">
			<div class="notice-left-img"><h-icon types="h-gonggao" :size="24" /></div>	
			<div class="notice-left-text">{{text}}</div>	
		</div>
		<div slot="noticeList" class="notice-item" v-for="(item,index) in noticeList" :key="index">
			<div class="notice-info-text">{{item.text}}</div>
			<div class="notice-info-img"><h-icon types="h-xiangyou2" /></div>
		</div>
	</h-notice>
</template>
<script>
export default {
	data() {
		return {
			img:require("../../.vuepress/public/images/index/notice.png"),
			text:'通知广告',
			noticeList: [
				{
					text:'超50万中国网民联署：调查德特里克堡！'
				},
				{
					text:'拜登要断美国商界的财路 美国商人急了'
				},
				{
					text:'55名奥运相关人员确诊 东京奥运压力空前'
				},
				{
					text:'“吴亦凡事件”发酵！良品铺子也发声了'
				},
				
			],
		}
	},
}
</script>
```
::: 
### Attributes
参数|说明|类型|可选值|默认值
----|----|----|----|----
noticeList|广告列表|Array|-|无
img|自定义左侧图片|string|-|无
text|自定义左侧文字|string|-|无
types|轮播方向|string|top,bottom,left,right|top
