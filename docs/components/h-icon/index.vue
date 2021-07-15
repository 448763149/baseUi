<template>
	<div>
  <i :class="[types,'iconfont']" :style="{fontSize:size+'px'}"></i>
	</div>
</template>
<script>
export default {
	props:{
		types: {  // 类型
			type: String,
			default: ''
		},
		size: {  // 类型
			type: Number,
			default: 16
		},
	},
  name:'hIcon',
  data() {
    return {
    }
  }
}
</script>
