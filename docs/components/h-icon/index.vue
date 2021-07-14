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
<style>
.all_icon{
}
.icon_item{
	width: 20%;
	display: inline-block;
	margin: 20px 0px;
	text-align: center;
}
.icon_item:hover{
	color: #0086B3;
}
.demo-block-control{
	display: none;
}
.icon_text{
	font-size: 12px;
}
</style>