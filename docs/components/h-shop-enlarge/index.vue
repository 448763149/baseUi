<template>
	<div>
		<div class="pic_box clearfix">
			<div class="pic_img">
				<div class="magnify">
					<div ref="previewBox" class="preview-box" @mousemove="move($event)" @mouseout="out">
						<div v-if="hasPlayer&&type=='player'" class="pre-player" @click="isPlay=true">
							<img src="../../.vuepress/public/images/product/play.png">
						</div>
						<p v-if="hasPlayer&&type=='player'" class="pre-text" @click="isPlay=true">播放</p>
						<div v-if="isPlay&&type=='player'" class="h-100" style="top: 0px;left:0px">
							<video ref="myVideo" autoplay width="360" controls="controls" height="360" :src="playerUrl"
								class="video-box"></video>
							<div v-if="isPlay" class="video-out" @click="isPlay=false">退出播放</div>
						</div>
						<img :src="showSrc1" v-if="!isPlay" alt="" />
						<div v-if="!isPlay" ref="hoverBox" class="hover-box" />
					</div>
					<div v-show="zoomVisiable" ref="zoomBox" class="zoom-box">
						<img ref="bigImg" :src="showBigSrc1" alt="" />
					</div>
				</div>
			</div>
			<div class="pic_slide">
				<div class="thumbnail-box">
					<i v-if="allNum > 5" class="btn btn-prev" @click="prev">
						< </i>
							<i v-if="allNum > 5" class="btn btn-next" @click="next">></i>
							<!-- <a-icon v-if="allNum > 5" type="left" class="btn btn-prev" @click="prev" />
					<a-icon v-if="allNum > 5" type="right" class="btn btn-next" @click="next" /> -->
							<div class="list">
								<div ref="owl" class="deli-owl" :style="{ right: owlRight + 'px' }">
									<ul class="slide_list clearfix">
										<li v-for="(item, index) in productInfo.productMultiImage" :key="index"
											:class="inde == index ? 'item-cur' : ''" class="slide_item" @mouseover="
                    mouseOv(index, item.bigImageUrl, item.bigImageUrl,item.player)
                  ">
											<img :src="item.bigImageUrl" alt="#" />
										</li>
									</ul>
								</div>
							</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	function offset(el) {
		let top = el.offsetTop;
		let left = el.offsetLeft;
		while (el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}
		return {
			left: left,
			top: top,
		};
	}
	export default {
		name: 'hShopEnlarge',
		props: {
			iteml: {
				type: String,
				default: "0",
			},
			productInfo: {
				type: Object,
				default: {},
			},
			showBigSrc: {
				type: String,
				default: "",
			},
			showSrc: {
				type: String,
				default: "",
			},
			type: {
				type: String,
				default: "",
			},
		},

		data() {
			return {
				zoomVisiable: false,
				hoverVisiable: false,
				showPrev: false,
				shoeNext: true,
				currentIn: 1,
				reut: 0,
				elem: {},
				leftPx: [],
				reLeng: 0, // 总共长度
				owlRight: 0,
				inde: 0,
				showSrc1: "",
				showBigSrc1: "",
				allNum: "",
				leng: 0, // 多维图长度
				hasPlayer: false,
				playerUrl: '',
				isPlay: false,
			};
		},
		created() {
			this.showSrc1 = this.productInfo.productMultiImage[0].bigImageUrl;
			this.showBigSrc1 = this.productInfo.productMultiImage[0].bigImageUrl;
			this.allNum = this.productInfo.productMultiImage.length;
			this.playerUrl = this.productInfo.productMultiImage[0].player;
			if (this.playerUrl) {
				this.hasPlayer = true;
			} else {
				this.hasPlayer = false;
			}
		},
		methods: {
			out() {
				this.zoomVisiable = false;
			},
			// 鼠标移入切换大图显示
			mouseOv: function(i, s, b, p) {
				this.inde = i;
				this.showSrc1 = s;
				this.showBigSrc1 = b;
				if (p && this.isPlay == false) {
					this.hasPlayer = true;
					this.playerUrl = p
				} else if (p && this.isPlay == true) {
					this.hasPlayer = true;
				} else if (!p) {
					this.hasPlayer = false;
				}
			},
			move(ev) {
				if (!this.isPlay) {
					this.init();
					// 鼠标距离屏幕距离
					// eslint-disable-next-line prefer-const
					let moveX = ev.clientX;
					// eslint-disable-next-line prefer-const
					let moveY = ev.clientY;
					// 大盒子距离顶部的距离
					// eslint-disable-next-line prefer-const
					let offsetLeft = offset(this.oPreviewBox).left;

					// eslint-disable-next-line prefer-const
					let offsetTop = offset(this.oPreviewBox).top;
					let left = moveX - offsetLeft - this.houverWidth / 2;
					let top;
					if (this.scroll > 0) {
						top = moveY - offsetTop + this.scroll - this.houverHeight / 2;
					} else {
						top = moveY - offsetTop - this.houverHeight / 2;
					}
					// eslint-disable-next-line prefer-const
					let maxWidth = this.pWidth - this.houverWidth;
					// eslint-disable-next-line prefer-const
					let maxHeight = this.pWidth - this.houverHeight;
					left = left < 0 ? 0 : left > maxWidth ? maxWidth : left;
					top = top < 0 ? 0 : top > maxHeight ? maxHeight : top;
					// eslint-disable-next-line prefer-const
					let percentX = left / maxWidth;
					// eslint-disable-next-line prefer-const
					let percentY = top / maxHeight;
					this.oHoverBox.style.left = left + "px";
					this.oHoverBox.style.top = top + "px";
					this.oBigImg.style.left = percentX * (this.bWidth - this.imgWidth) + "px";
					this.oBigImg.style.top =
						percentY * (this.bHeight - this.imgHeight) + "px";
					this.$emit("move", ev);
					this.zoomVisiable = true;
				}

			},
			init() {
				this.oHoverBox = this.$refs.hoverBox;
				this.oPreviewBox = this.$refs.previewBox;
				this.oBigImg = this.$refs.bigImg;
				this.imgBox = this.$refs.zoomBox;
				this.houverWidth = this.oHoverBox.offsetWidth;
				this.houverHeight = this.oHoverBox.offsetHeight;
				this.pWidth = this.oPreviewBox.offsetWidth;
				this.pHeight = this.oPreviewBox.offsetHeight;
				this.imgWidth = this.oBigImg.offsetWidth;
				this.imgHeight = this.oBigImg.offsetHeight;
				this.bWidth = this.imgBox.offsetWidth;
				this.bHeight = this.imgBox.offsetHeight;
				this.scroll =
					document.documentElement.scrollTop || document.body.scrollTop;
			},
			prev: function() {
				if (this.owlRight != 0) {
					this.owlRight = this.owlRight - 74;
				}
			},
			next: function() {
				let allNum;
				if (this.allNum > 5) {
					allNum = this.allNum - 5;
					if (this.owlRight != allNum * 74) {
						this.owlRight = this.owlRight + 74;
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

	.pic_box {
		width: 400px;
		height: 495px;
		padding: 20px;
		position: relative;
		margin: auto;

		.pic_img {
			width: 360px;
			height: 360px;
			margin: 0 auto;
			position: relative;

			img {
				width: 100%;
				height: 100%;
			}

			.magnify {
				position: relative;

				.preview-box {
					width: 360px;
					height: 360px;
					position: relative;

					img {
						width: 100%;
						height: 100%;
					}

					.pre-player {
						cursor: pointer;
						position: absolute;
						bottom: 20px;
						left: 50%;
						margin-left: -35px;
						z-index: 2;

						img {
							width: 70px;
							height: 25px;
						}
					}

					.pre-text {
						cursor: pointer;
						z-index: 3;
						position: absolute;
						bottom: 27px;
						left: 50%;
						margin-left: -4px;
						font-size: 12px;
					}

					.h-100 {
						z-index: 4;
						width: 360px;
						height: 360px;
						background-color: black;
						position: absolute;
						left: 0px;
						top: 0px;

						video {
							width: 100%;
							height: 100%;
						}

						.video-out {
							z-index: 5;
							width: 80px;
							height: 30px;
							line-height: 30px;
							text-align: center;
							background-color: rgba(241, 235, 235, .5);
							position: absolute;
							cursor: pointer;
							top: 10px;
							right: 10px;
							border-radius: 30px;
							font-size: 14px;
							color: #FFFFFF;
						}
					}



					&:hover .hover-box {
						display: block;
					}

					.hover-box {
						position: absolute;
						display: none;
						left: 0;
						top: 0;
						width: 200px;
						height: 200px;
						border: 1px solid #ccc;
						box-sizing: border-box;
						background: #0dd3ba;
						opacity: 0.2;
						cursor: move;
						user-select: none;
					}
				}

				.zoom-box {
					width: 495px;
					height: 495px;
					overflow: hidden;
					position: absolute;
					left: 377px;
					border: 1px solid #eee;
					box-sizing: border-box;
					top: -21px;
					z-index: 1;
					background: #fff;

					img {
						width: 800px;
						height: 800px;
						position: absolute;
						top: 0;
						left: 0;
						max-width: none;
					}
				}
			}
		}

		.pic_slide {
			width: 360px;
			margin: auto;
			margin-top: 30px;

			.slide_list {
				height: 64px;

				.slide_item {
					list-style: none;
					float: left;
					width: 64px;
					height: 64px;
					margin-right: 10px;
					border: 1px solid #eee;
					box-sizing: border-box;
					cursor: pointer;

					&.item-cur {
						img {
							border: 2px solid #ff4349;
							box-sizing: border-box;
						}
					}

					img {
						width: 100%;
						height: 100%;
					}
				}
			}

			.thumbnail-box {
				position: relative;
				width: 100%;
			}

			.thumbnail-box .btn {
				position: absolute;
				top: 1px;
				width: 20px;
				height: 62px;
				line-height: 62px;
				z-index: 1;
				padding: 0;
				font-size: 22px;
				text-align: center;
				color: #fff;
				background-color: rgba(31, 45, 61, 0.11);
				box-sizing: border-box;
			}

			.thumbnail-box .btn:hover {
				background-color: rgba(31, 45, 61, 0.23);
			}

			.thumbnail-box .btn-prev {
				left: 0px;
			}

			.thumbnail-box .btn-next {
				right: 0px;
			}

			.thumbnail-box .list {
				width: 100%;
				overflow: hidden;
				position: relative;
				zoom: 1;
			}

			.deli-owl {
				width: 10000px;
				position: relative;
				transition: all 0.5s;
			}
		}
	}
</style>
