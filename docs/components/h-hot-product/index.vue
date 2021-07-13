<template>
	<div class="de-info-right">
		<img v-if="hotList.length > 3" class="hot-top" @click="hotUp"
			src="../../.vuepress/public/images/product/hot-top.png" alt />
		<img v-if="hotList.length > 3" class="hot-bottom" @click="hotDown"
			src="../../.vuepress/public/images/product/hot-bottom.png" alt />
		<div class="de-title">热销商品推荐</div>
		<div class="de-list">
			<div class="ov-list" :style="{ bottom: poTop + 'px' }">
				<div class="de-infos" v-for="(item, index1) in hotList" :key="index1"
					@click="$router.push('/productDetail?item=' + item)">
					<div class="de-info-img">
						<img :src="item.img" alt />
					</div>
					<div class="de-info-text">{{ item.name }}</div>
					<div class="de-info-price">
						<span>￥</span>
						<span>{{ item.price }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hHotProduct',
		props: ["hotList"],
		data() {
			return {
				poTop: 0, // 热门推荐偏移
			};
		},
		created() {},
		methods: {
			hotUp() {
				if (this.poTop == 0) {} else {
					this.poTop = this.poTop - 235;
				}
			},
			hotDown() {
				let allNum;
				if (this.hotList.length > 3) {
					allNum = this.hotList.length - 3;
					if (this.poTop != allNum * 235) {
						console.log(this.poTop, allNum * 235);
						this.poTop = this.poTop + 235;
					}
				}
				console.log(this.poTop);
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
		height: 790px;
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
</style>
