
### 基础轮播图
商品详情热门商品基础轮播图
::: demo 
```html
<template>
  <h-hot-product :hotList="hotList">
		<div slot="de-infos" class="de-infos" v-for="(item, index1) in hotList" :key="index1">
			<div class="de-info-img">
				<img :src="item.img" alt />
			</div>
			<div class="de-info-text">{{ item.name }}</div>
			<div class="de-info-price">
				<span>￥</span>
				<span>{{ item.price }}</span>
			</div>
		</div>
	</h-hot-product>
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

### 竖行轮播图
商品详情热门商品竖行轮播图
::: demo 
```html
<template>
  <h-hot-product :hotList="hotList" type="up">
	<div slot="de-infos" class="de-infos" v-for="(item, index1) in hotList" :key="index1">
		<div class="de-info-img">
			<img :src="item.img" alt />
		</div>
		<div class="de-info-text">{{ item.name }}</div>
		<div class="de-info-price">
			<span>￥</span>
			<span>{{ item.price }}</span>
		</div>
	</div>
	</h-hot-product>
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

### 显示轮播图个数
num:显示当前展示的轮播图个数  默认为3
::: demo 
```html
<template>
  <h-hot-product :hotList="hotList" :num="2">
	<div slot="de-infos" class="de-infos" v-for="(item, index1) in hotList" :key="index1">
		<div class="de-info-img">
			<img :src="item.img" alt />
		</div>
		<div class="de-info-text">{{ item.name }}</div>
		<div class="de-info-price">
			<span>￥</span>
			<span>{{ item.price }}</span>
		</div>
	</div>
	</h-hot-product>
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
hotList|商品详情热门商品列表|Array|-|无
img|热门商品列表item商品图片|string|-|无
name|热门商品列表item商品名称|string|-|无
price|热门商品列表item商品价格|string|-|无
type|商品列表展示方式 type='up'为竖行展示，默认为横行|string|up|无
num|当前展示的轮播图个数|Number|-|3
