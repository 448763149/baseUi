### 基础轮播公告
::: demo 
```html
<template>
  <h-notice :noticeList="noticeList"  />
</template>
<script>
export default {
	data() {
		return {
			noticeList: [
				'1', '2', '3', '4', '5', '6', '7'
			],
		}
	}
}
</script>
```
:::