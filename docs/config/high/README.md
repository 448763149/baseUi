### 图标
::: demo 
```html
<template>
  <div class="all_icon" v-if="iconJson">
	  <div class="icon_item" v-for="(item,index) in iconJson.glyphs" :key="index">
			<h-icon :types="iconJson.css_prefix_text+item.font_class" :size="30" />
			<div class="icon_text">{{iconJson.css_prefix_text+item.font_class}}</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
	    return {
				iconJson:{}
			}
	},
	 created() {
     this.iconJson = require('../../components/icon/iconfont.json');
	 },
}
</script>
```
:::

### 代码示例
::: tip
```html
<template>
  <h-icon types="h-shouji3" :size="40" />
</template>
<script>
export default {
}
</script>
```
:::

### Attributes
参数|说明|类型|可选值|默认值
----|----|----|----|----
types|图标类名|string|-|无
size|图标大小|number|无|16
