<template>
	<div class="h-notice">
		<div class="h-notice-left">
			<div class="notice-left-img"><img src="../../.vuepress/public/images/index/notice.png"></div>
			<div class="notice-left-text">通知公告</div>
		</div>
		<div class="notice-info">
			<div class="notice-ov" :style="{bottom:(types=='bottom'?topSet+'px':''),top:(types=='top'?topSet+'px':'')}">
				<div class="notice-item" v-for="(item,index) in noticeList" :key="index">
					<div class="notice-info-text">{{item}}</div>
					<div class="notice-info-img"><img src="../../.vuepress/public/images/index/right.png"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'hNotice',
		props:{
			noticeList: {
				type: Array,
				default: []
			},
			types: {
				type: String,
				default: 'top'
			},
		},
		data() {
			return {
				topSet: 0,
				num:0,
			}
		},
		created() {

		},
		created() {
			if(this.types=='bottom'){
				this.noticeList=this.noticeList.reverse()
			};
		},
		mounted() {
			let that = this
			let interv = setInterval(function() {
					that.topSet = that.topSet - 30
					that.noticeList.push(that.noticeList[that.num])
					that.num++
					console.log(that.noticeList)
			}, 3000);
			// clearInterval(interv)
		},
	}
</script>
<style scoped lang="scss">
	.h-notice {
		height: 70px;
		border: 1px solid #eee;
		box-sizing: border-box;
		vertical-align: middle;
		position: relative;

		.h-notice-left {
			width: 18%;
			position: absolute;
			top: 50%;
			margin-top: -14px;

			div {
				float: left;
			}

			.notice-left-img {
				margin-top: 4px;
			}

			.notice-left-text {
				margin-left: 10px;
				font-size: 20px;
				font-weight: bold;
				color: #c7000a;
			}
		}

		.notice-info {
			width: 80%;
			height: 30px;
			flex-grow: 1;
			position: relative;
			float: right;
			margin-top: 20px;
			overflow: hidden;
			.notice-ov {
				width: 100%;
				position: absolute;
				transition: all .5s;

				.notice-item {
					float: left;
					width: 100%;
					cursor: pointer;

					.notice-info-text {
						max-width: 95%;
						height: 30px;
						line-height: 30px;
						float: left;
						overflow: hidden;
						text-overflow:ellipsis; 
						white-space: nowrap;
					}

					.notice-info-img {
						float: right;

						img {
							margin-top: 8px;
						}
					}
				}

			}

		}
	}
</style>
