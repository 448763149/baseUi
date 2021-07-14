<template>
	<div class="h-notice">
		<div ref="noticeLeft">
			<slot name="notice" />
		</div>
		<div class="notice-info" :style="{marginLeft:slotsValue+'px'}" v-if="typeValue=='top'||typeValue=='bottom'">
			<div class="notice-ov"
				:style="{bottom:(typeValue=='bottom'?topSet+'px':''),top:(typeValue=='top'?topSet+'px':'')}">
				<div class="notice-item" v-for="(item,index) in noticeList" :key="index">
					<div class="notice-info-text">{{item}}</div>
					<div class="notice-info-img"><img src="../../.vuepress/public/images/index/right.png"></div>
				</div>
			</div>
		</div>
		<div class="notice-info" :style="{marginLeft:slotsValue+'px'}" ref="notInfo" v-if="typeValue=='left'">
			<div class="notice-ov1" :style="{left:(typeValue=='left'?leftSet+'px':'')}">
				<div class="notice-item" :style="{width:infoWidth+'px'}" v-for="(item,index) in noticeList"
					:key="index">
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
		props: {
			noticeList: { // 广告数组
				type: Array,
				default: () => []
			},
			types: { // 类型
				type: String,
				default: 'top'
			},
		},
		data() {
			return {
				topSet: 0, // typeValue=top或bottom时偏移的角度
				leftSet: 0, // typeValue=left或right时偏移的角度
				num: 0, //typeValue=top时计数器
				infoWidth: 0, //notInfo的宽度
				slotsValue: 0, // slot元素宽度
				imgHeight: 0, // slot图片高度
			}
		},
		created() {
			this.typeValue = this.types;
			if (this.typeValue && this.typeValue != 'bottom' && this.typeValue != 'left') {
				this.typeValue = 'top'
			}
		},
		mounted() {
			if (this.typeValue == 'bottom') {
				this.noticeList = this.noticeList.reverse()
			};
			if (this.typeValue && this.typeValue != 'bottom' && this.typeValue != 'left') {
				this.typeValue = 'top'
			}
			setTimeout(() => {
				if (this.$refs.noticeLeft.children[0]) {
					console.log(this.$refs.noticeLeft.children[0].offsetWidth)
					this.slotsValue = this.$refs.noticeLeft.children[0].offsetWidth + 10
				}
			}, 10);
			if (this.$refs.noticeLeft.children[0].children[0]) {
				this.imgHeight = this.$refs.noticeLeft.children[0].children[0].offsetHeight
			}
			console.log(this.$refs.noticeLeft.children[0])
			if (this.$refs.notInfo) {
				this.infoWidth = this.$refs.notInfo.offsetWidth
			}
			let that = this
			let unNum = that.noticeList.length - 1
			let interv = setInterval(function() {
				that.topSet = that.topSet - 30
				that.leftSet -= that.infoWidth + 10
				if (that.typeValue == 'top' || that.typeValue == 'left') {
					that.noticeList.push(that.noticeList[that.num])
					that.num++
				} else if (that.typeValue == 'bottom') {
					that.noticeList.unshift(that.noticeList[unNum])
				}
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
			height: 70px;
			line-height: 70px;
			float: left;

			div {
				float: left;
			}

			span {}

			.notice-left-img {
				display: table;

				img {
					vertical-align: middle;
				}
			}

			.notice-left-text {
				margin-left: 10px;
				font-size: 20px;
				font-weight: bold;
				color: #c7000a;
			}
		}

		.notice-info {
			height: 30px;
			flex-grow: 1;
			position: relative;
			margin-top: 20px;
			margin-left: 130px;
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
						max-width: 87%;
						height: 30px;
						line-height: 30px;
						float: left;
						overflow: hidden;
						text-overflow: ellipsis;
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

			.notice-ov1 {
				width: 1000000px;
				position: absolute;
				transition: all .5s;

				.notice-item {
					float: left;
					cursor: pointer;
					margin-right: 10px;

					.notice-info-text {
						max-width: 87%;
						height: 30px;
						line-height: 30px;
						float: left;
						overflow: hidden;
						text-overflow: ellipsis;
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
