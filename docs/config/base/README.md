### 轮播公告
::: demo 
```html
<template>
  <h-notice :noticeList="noticeList" types="top">
	  <div slot="notice" class="h-notice-left">
			<div class="notice-left-img"><img :src="img" /></div>	
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
			rightImg:require("../../.vuepress/public/images/index/right.png"),
			text:'通知广告',
			noticeList: [
				{
					text:'11'
				},
				{
					text:'22'
				},
				{
					text:'33'
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
