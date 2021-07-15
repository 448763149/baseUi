<template>
	<div class="h-notice">
		<div class="h-slotClass" ref="noticeLeft">
			<slot name="notice" />
		</div>
		<div v-if="typeValue=='top'||typeValue=='bottom'" class="notice-info" :style="{marginLeft:slotsValue+'px'}">
			<div class="notice-ov"
				:style="{bottom:(typeValue=='bottom'?topSet+'px':''),top:(typeValue=='top'?topSet+'px':'')}">
				<slot name="noticeList" />
			</div>
		</div>
		<div v-if="typeValue=='left'||typeValue=='right'" class="notice-info"
			:style="{marginLeft:(typeValue=='right'?'0px':slotsValue+'px')}" ref="notInfo">
			<div class="notice-ov1" ref="noticeItem"
				:style="{left:(typeValue=='left'?leftSet+'px':''),right:(typeValue=='right'?leftSet+'px':'')}">
				<slot name="noticeList" />
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
				default: () => {
					return []
				}
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
			if (this.typeValue && this.typeValue != 'bottom' && this.typeValue != 'left' && this.typeValue !=
				'right') {
				this.typeValue = 'top'
			}
		},
		mounted() {
			if (this.typeValue == 'bottom') {
				this.noticeList = this.noticeList.reverse()
			};
			if (this.typeValue && this.typeValue != 'bottom' && this.typeValue != 'left' && this.typeValue !=
				'right') {
				this.typeValue = 'top'
			}
			setTimeout(() => {
				if (this.$refs.noticeLeft.children[0]) {
					this.slotsValue = this.$refs.noticeLeft.children[0].offsetWidth + 10
				}
			}, 10);
			if (this.$refs.noticeLeft.children[0].children[0]) {
				this.imgHeight = this.$refs.noticeLeft.children[0].children[0].offsetHeight
			}

			setTimeout(() => {
				if (this.$refs.notInfo) {
					this.infoWidth = this.$refs.notInfo.offsetWidth
				}
				if (this.$refs.noticeItem) {
					this.getNotItem()
				}
			}, 10);

			let that = this
			let unNum = that.noticeList.length - 1
			let interv = setInterval(function() {
				// for (let i = 0; i < that.$refs.noticeItem.children.length; i++) {
				// 	that.$refs.noticeItem.children[i].style.left=parseInt(that.$refs.noticeItem.children[i].style.left)-563+'px'
				//   if(parseInt(that.$refs.noticeItem.children[i].style.left)==-563*(that.$refs.noticeItem.children.length-1)){
				// 		that.$refs.noticeItem.children[i].style.left=563+'px'
				// 	}
				// }
				
				that.topSet = that.topSet - 30
				if (that.typeValue == 'right') {
					that.leftSet -= that.infoWidth
				} else {
					that.leftSet -= that.infoWidth + 10
				}
				if (that.typeValue == 'top' || that.typeValue == 'left' || that.typeValue == 'right') {
					that.noticeList.push(that.noticeList[that.num])
					that.num++
				} else if (that.typeValue == 'bottom') {
					that.noticeList.unshift(that.noticeList[unNum])
				}
				if (that.$refs.noticeItem) {
					that.getNotItem()
				}
			}, 3000);
			// clearInterval(interv)
		},
		methods: {
			getNotItem() {
				for (let i = 0; i < this.$refs.noticeItem.children.length; i++) {
					if (this.typeValue == 'right') {
						this.$refs.noticeItem.children[i].style.width = this.infoWidth - 10 + 'px'
						this.$refs.noticeItem.children[i].style.marginLeft = '10px'
						this.$refs.noticeItem.children[i].style.marginRight = '0px'
						this.$refs.noticeItem.children[i].style.float = 'right'
					} else {
						this.$refs.noticeItem.children[i].style.width = this.infoWidth + 'px'
						this.$refs.noticeItem.children[i].style.marginLeft = '0px'
						this.$refs.noticeItem.children[i].style.marginRight = '10px'
						this.$refs.noticeItem.children[i].style.float = 'left'
					}
					// const gg = `<div class="notice-info-img"><img :src="rightImg"></div>`
					// this.$refs.noticeItem.children[i].append()
				}
			}
		}
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
						line-height: 30px;
						
					}
				}

			}

		}
	}
</style>
