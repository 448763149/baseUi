<template>
	<div :class="[type=='up'?'de-info-right':'de-info-right1']"
		:style="{height:(type=='up'?num*235-15+100+'px':''),width:(type!='up'?num*190-30+'px':'')}">
		<img v-if="hotList.length > num" class="hot-top" @click="hotUp"
			src="../../.vuepress/public/images/product/hot-top.png" alt />
		<img v-if="hotList.length > num" class="hot-bottom" @click="hotDown"
			src="../../.vuepress/public/images/product/hot-bottom.png" alt />
		<div class="de-list" :style="{height:(type=='up'?num*235-15+'px':'')}">
			<div class="ov-list" :style="{bottom:(type=='up'?poTop+'px':''),right:(type!='up'?poTop+'px':'') }">
				<slot name="de-infos" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hHotProduct',
		props: {
			hotList: {
				type: Array,
				default: () => {
					return []
				}
			},
			type: {
				type: String,
				default: ''
			},
			num: {
				type: Number,
				default: 3
			}
		},
		data() {
			return {
				poTop: 0, // 热门推荐偏移
			};
		},
		created() {},
		methods: {
			hotUp() {
				let num = this.type == 'up' ? 235 : 190
				if (this.poTop == 0) {} else {
					this.poTop = this.poTop - num;
				}
			},
			hotDown() {
				let allNum;
				let num = this.type == 'up' ? 235 : 190
				if (this.hotList.length > this.num) {
					allNum = this.hotList.length - this.num;
					if (this.poTop != allNum * num) {
						this.poTop = this.poTop + num;
					}
				}
			},
		},
	};
</script>
<style scoped lang="scss">
	div,
	a,
	p,
	b,
	em,
	i,
	strong,
	span,
	img,
	ul,
	li,
	ol,
	dl,
	dt,
	dd,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	input,
	form {
		margin: 0;
		padding: 0;
	}

	.de-info-right {
		width: 250px;
		// padding: 27px 45px;
		text-align: center;
		margin: auto;
		position: relative;

		.de-title {
			font-weight: bold;
			font-size: 18px;
			margin-bottom: 20px;
		}

		.de-list {
			height: 690px;
			overflow: hidden;

			.ov-list {
				height: 10000px;
				position: relative;
				transition: all 0.5s;
			}

			.de-infos {
				margin-bottom: 15px;
				cursor: pointer;

				.de-info-img {
					width: 160px;
					height: 160px;
					margin: auto;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.de-info-text {
					margin: auto;
					margin-top: 5px;
					font-size: 18px;
					width: 160px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.de-info-price {
					width: 160px;
					font-size: 20px;
					color: #e85144;
					text-align: left;
					margin: auto;
					margin-top: 4px;
				}
			}
		}

		.hot-top {
			position: absolute;
			bottom: 0px;
			left: 0px;
			cursor: pointer;
		}

		.hot-bottom {
			position: absolute;
			bottom: 0px;
			right: 0px;
			cursor: pointer;
		}
	}

	.de-info-right1 {
		width: 540px;
		margin: auto;
		// padding: 27px 45px;
		position: relative;

		.de-title {
			font-weight: bold;
			font-size: 18px;
			margin-bottom: 20px;
		}

		.de-list {
			overflow: hidden;

			.ov-list {
				width: 10000px;
				position: relative;
				transition: all 0.5s;
			}

			.de-infos {
				display: inline-block;
				margin-right: 30px;
				cursor: pointer;

				.de-info-img {
					width: 160px;
					height: 160px;
					margin: auto;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.de-info-text {
					margin: auto;
					margin-top: 5px;
					font-size: 18px;
					width: 160px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.de-info-price {
					width: 160px;
					font-size: 20px;
					color: #e85144;
					text-align: left;
					margin: auto;
					margin-top: 4px;
				}
			}
		}

		.hot-top {
			transform: rotate(-90deg);
			position: absolute;
			top: 50%;
			margin-top: -40px;
			left: -22px;
			z-index: 10;
			cursor: pointer;
		}

		.hot-bottom {
			transform: rotate(-90deg);
			position: absolute;
			top: 50%;
			margin-top: -40px;
			right: -23px;
			z-index: 10;
			cursor: pointer;
		}
	}
</style>
