
### 基础放大镜
商品详情基础放大镜功能
::: demo 
```html
<template>
  <h-shop-enlarge :productInfo="productInfo" direction="left" />
</template>
<script>
export default {
	data() {
		return {
			productInfo: {
							productMultiImage: [
			          {
									player:'',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R4iALFpXAAFoEIyys1s475.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yAHGuiAACt1EW0W7Q419.jpg",
			            bigImageUrl:require("../../.vuepress/public/images/guide/mag6.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yATHPMAABfMDqdlsI927.jpg",
			            position: 0,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAWTimAAAfMG4eMHM619.jpg",
			          },
			          {
									player:'https://www.caiyichetrade.com/group1/M00/00/C4/rBEBUGBTJdKAARTTAEkZTY1-hTk177.mp4',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
			            bigImageUrl:
			              require("../../.vuepress/public/images/guide/mag2.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
			            position: 1,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
			          },
			          {
									player:'',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
			            bigImageUrl:
			              require("../../.vuepress/public/images/guide/mag3.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
			            position: 1,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
			          },
			          {
									player:'',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
			            bigImageUrl:
			              require("../../.vuepress/public/images/guide/mag4.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
			            position: 1,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
			          },
			
			          {
									player:'https://www.caiyichetrade.com/group1/M00/00/C4/rBEBUGBTJdKAARTTAEkZTY1-hTk177.mp4',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R4iALFpXAAFoEIyys1s475.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yAHGuiAACt1EW0W7Q419.jpg",
			            bigImageUrl:
			              require("../../.vuepress/public/images/guide/mag5.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yATHPMAABfMDqdlsI927.jpg",
			            position: 0,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAWTimAAAfMG4eMHM619.jpg",
			          },
								{
									player:'',
								  basicImageKey:
								    "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
								  bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
								  bigImageUrl:
								    require("../../.vuepress/public/images/guide/mag7.jpg"),
								  centerImageKey:
								    "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
								  position: 1,
								  productUuid: "1c659872ce234cbc80d02874ffc0a035",
								  smallImageKey:
								    "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
								},
			        ],
			      }, // 商品信息
		}
	}
}
</script>
```
:::
### 视频播放放大镜
商品详情带有视频播放功能
；type="player"定义带有视频播放功能的放大镜
::: demo 
```html
<template>
  <h-shop-enlarge :productInfo="productInfo" direction="left" type="player" />
</template>
<script>
export default {
	data() {
		return {
			productInfo: {
							productMultiImage: [
			          {
									player:'https://www.caiyichetrade.com/group1/M00/00/C4/rBEBUGBTJdKAARTTAEkZTY1-hTk177.mp4',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R4iALFpXAAFoEIyys1s475.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yAHGuiAACt1EW0W7Q419.jpg",
			            bigImageUrl:
			              require("../../.vuepress/public/images/guide/mag6.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yATHPMAABfMDqdlsI927.jpg",
			            position: 0,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAWTimAAAfMG4eMHM619.jpg",
			          },
			          {
									player:'https://1612.cdn-vod.huaweicloud.com/asset/fa77273e75dc36c3f7a5e8f928e5cd6c/b5e9c6e65c494c08b76d81df0567afc3.mp4',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
			            bigImageUrl:
			              require("../../.vuepress/public/images/guide/mag2.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
			            position: 1,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
			          },
			          {
									player:'',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
			            bigImageUrl:
			              require("../../.vuepress/public/images/guide/mag3.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
			            position: 1,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
			          },
			          {
									player:'',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
			            bigImageUrl:
			              require("../../.vuepress/public/images/guide/mag4.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
			            position: 1,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
			          },
			
			          {
									player:'https://www.caiyichetrade.com/group1/M00/00/C4/rBEBUGBTJdKAARTTAEkZTY1-hTk177.mp4',
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R4iALFpXAAFoEIyys1s475.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yAHGuiAACt1EW0W7Q419.jpg",
			            bigImageUrl:
			              require("../../.vuepress/public/images/guide/mag5.jpg"),
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yATHPMAABfMDqdlsI927.jpg",
			            position: 0,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAWTimAAAfMG4eMHM619.jpg",
			          },
								{
									player:'',
								  basicImageKey:
								    "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
								  bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
								  bigImageUrl:
								    require("../../.vuepress/public/images/guide/mag7.jpg"),
								  centerImageKey:
								    "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
								  position: 1,
								  productUuid: "1c659872ce234cbc80d02874ffc0a035",
								  smallImageKey:
								    "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
								},
			        ],
			      }, // 商品信息
		}
	}
}
</script>
```
:::

### Attributes
参数|说明|类型|可选值|默认值
----|----|----|----|----
type|是否带有视频播放功能|string|player|无
productInfo|商品详情轮播图列表|object|无|无
bigImageUrl|当前显示放大镜图|string|无|无
player|当前视频播放地址|string|无|无
direction|放大图显示位置|string|left，right|right