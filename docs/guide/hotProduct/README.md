
### 热门商品
商品详情热门商品功能
::: demo 
```html
<template>
  <h-hot-product :hotList="hotList" />
</template>
<script>
export default {
	data() {
		return {
			hotList: [
			        {
			          img: require("../../.vuepress/public/images/product/hotimg.png"),
			          name: "隔音棉毛毡房门密封门密封",
			          price: "71.00",
			        },
			        {
			          img: require("../../.vuepress/public/images/product/hotimg.png"),
			          name: "隔音棉毛毡房门密封门密封",
			          price: "72.00",
			        },
			        {
			          img: require("../../.vuepress/public/images/product/hotimg.png"),
			          name: "隔音棉毛毡房门密封门密封",
			          price: "73.00",
			        },
			        {
			          img: require("../../.vuepress/public/images/product/hotimg.png"),
			          name: "隔音棉毛毡房门密封门密封",
			          price: "74.00",
			        },
			        {
			          img: require("../../.vuepress/public/images/product/hotimg.png"),
			          name: "隔音棉毛毡房门密封门密封",
			          price: "75.00",
			        },
			        {
			          img: require("../../.vuepress/public/images/product/hotimg.png"),
			          name: "隔音棉毛毡房门密封门密封",
			          price: "76.00",
			        },
			      ],
		}
	}
}
</script>
```
:::

### Attributes
参数|说明|类型|可选值|默认值
----|----|----|----|----
hotList|商品详情热门商品列表|Array|无|无
img|热门商品列表item商品图片|string|无|无
name|热门商品列表item商品名称|string|无|无
price|热门商品列表item商品价格|string|无|无
