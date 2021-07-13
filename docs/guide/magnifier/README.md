
### 放大镜
商品详情放大镜功能
::: demo 
```html
<template>
  <h-shop-enlarge :productInfo="productInfo" />
</template>
<script>
export default {
	data() {
		return {
			productInfo: {
			        bigImageUrl: "https://www.caiyichetrade.com/group1/M00/00/D6/rBEBUGB9R4iALFpXAAFoEIyys1s475.jpg",
			        productMultiImage: [
			          {
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R4iALFpXAAFoEIyys1s475.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yAHGuiAACt1EW0W7Q419.jpg",
			            bigImageUrl:
			              "https://www.caiyichetrade.com/group1/M00/00/D6/rBEBUGB9R4iALFpXAAFoEIyys1s475.jpg",
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yATHPMAABfMDqdlsI927.jpg",
			            position: 0,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAWTimAAAfMG4eMHM619.jpg",
			          },
			          {
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
			            bigImageUrl:
			              "https://www.caiyichetrade.com/group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
			            position: 1,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
			          },
			          {
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
			            bigImageUrl:
			              "https://www.caiyichetrade.com/group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
			            position: 1,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
			          },
			          {
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yACk8gAADoGvqAyQ4945.jpg",
			            bigImageUrl:
			              "https://www.caiyichetrade.com/group1/M00/00/D6/rBEBUGB9R46AS2EyAAIMJF9AsPQ999.jpg",
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAMh6dAAB7qg_my4Q829.jpg",
			            position: 1,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAfXcnAAAmjgUIIFo455.jpg",
			          },
			
			          {
			            basicImageKey:
			              "group1/M00/00/D6/rBEBUGB9R4iALFpXAAFoEIyys1s475.jpg",
			            bigImageKey: "group1/M00/00/D6/rBEBUGB9R7yAHGuiAACt1EW0W7Q419.jpg",
			            bigImageUrl:
			              "https://www.caiyichetrade.com/group1/M00/00/D6/rBEBUGB9R4iALFpXAAFoEIyys1s475.jpg",
			            centerImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yATHPMAABfMDqdlsI927.jpg",
			            position: 0,
			            productUuid: "1c659872ce234cbc80d02874ffc0a035",
			            smallImageKey:
			              "group1/M00/00/D6/rBEBUGB9R7yAWTimAAAfMG4eMHM619.jpg",
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
productInfo|商品详情轮播图列表|object|无|无
bigImageUrl|当前显示放大镜图|string|无|无
