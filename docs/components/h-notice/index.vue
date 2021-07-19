<template>
  <div class="h-notice">
    <div class="h-slotClass" ref="noticeLeft">
      <slot name="notice" />
    </div>
    <div class="notice-info" :style="{ marginLeft: slotsValue + 'px' }">
      <div class="notice-ov" ref="noticeItemTop">
        <slot name="noticeList" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hNotice",
  props: {
    types: {
      // 类型
      type: String,
      default: "top",
    },
  },
  data() {
    return {
      slotsValue: 0, // slot元素宽度
      interv: "", // 定时器
    };
  },
  created() {
    this.typeValue = this.types;
    if (
      this.typeValue != "bottom" &&
      this.typeValue != "left" &&
      this.typeValue != "right"
    ) {
      this.typeValue = "top";
    }
  },
  mounted() {
    this.getNotItem();
  },
  destroyed() {
    clearInterval(this.interv);
  },
  methods: {
    getNotItem() {
      if (
        this.$refs.noticeItemTop.children &&
        this.$refs.noticeItemTop.children.length > 1
      ) {
        for (let i = 0; i < this.$refs.noticeItemTop.children.length; i++) {
          if (this.typeValue == "top") {
            this.$refs.noticeItemTop.children[i].style.top = i * 30 + "px";
          } else if (this.typeValue == "bottom") {
            this.$refs.noticeItemTop.children[i].style.bottom = i * 30 + "px";
          } else if (this.typeValue == "left") {
            this.$refs.noticeItemTop.children[i].style.left = i * 563 + "px";
          } else if (this.typeValue == "right") {
            this.$refs.noticeItemTop.children[i].style.right = i * 563 + "px";
          }
        }
      }
      setTimeout(() => {
        if (this.$refs.noticeLeft.children[0]) {
          this.slotsValue = this.$refs.noticeLeft.children[0].offsetWidth + 20;
        }
      }, 10);
      let that = this;
      that.interv = setInterval(function () {
        if (
          that.$refs.noticeItemTop.children &&
          that.$refs.noticeItemTop.children.length > 1
        ) {
          for (let i = 0; i < that.$refs.noticeItemTop.children.length; i++) {
            if (that.typeValue == "top") {
              that.$refs.noticeItemTop.children[i].style.top =
                parseInt(that.$refs.noticeItemTop.children[i].style.top) -
                30 +
                "px";
              if (
                parseInt(that.$refs.noticeItemTop.children[i].style.top) > 30 ||
                parseInt(that.$refs.noticeItemTop.children[i].style.top) < -30
              ) {
                that.$refs.noticeItemTop.children[i].style.transition = "none";
              } else {
                that.$refs.noticeItemTop.children[i].style.transition =
                  "all .5s";
              }
              if (that.$refs.noticeItemTop.children.length == 2) {
                if (
                  parseInt(that.$refs.noticeItemTop.children[i].style.top)!=0
                ) {
                  that.$refs.noticeItemTop.children[i].style.transition =
                    "none";
                } else {
                  that.$refs.noticeItemTop.children[i].style.transition =
                    "all .5s";
                }
              }
              if (
                parseInt(that.$refs.noticeItemTop.children[i].style.top) ==
                -30 * (that.$refs.noticeItemTop.children.length - 1)
              ) {
                that.$refs.noticeItemTop.children[i].style.top = 30 + "px";
              }
            } else if (that.typeValue == "bottom") {
              that.$refs.noticeItemTop.children[i].style.bottom =
                parseInt(that.$refs.noticeItemTop.children[i].style.bottom) -
                30 +
                "px";
              if (
                parseInt(that.$refs.noticeItemTop.children[i].style.bottom) >
                  30 ||
                parseInt(that.$refs.noticeItemTop.children[i].style.bottom) <
                  -30
              ) {
                that.$refs.noticeItemTop.children[i].style.transition = "none";
              } else {
                that.$refs.noticeItemTop.children[i].style.transition =
                  "all .5s";
              }
              if (that.$refs.noticeItemTop.children.length == 2) {
                if (
                  parseInt(that.$refs.noticeItemTop.children[i].style.bottom)!=0
                ) {
                  that.$refs.noticeItemTop.children[i].style.transition =
                    "none";
                } else {
                  that.$refs.noticeItemTop.children[i].style.transition =
                    "all .5s";
                }
              }
              if (
                parseInt(that.$refs.noticeItemTop.children[i].style.bottom) ==
                -30 * (that.$refs.noticeItemTop.children.length - 1)
              ) {
                that.$refs.noticeItemTop.children[i].style.bottom = 30 + "px";
              }
            } else if (that.typeValue == "left") {
              that.$refs.noticeItemTop.children[i].style.left =
                parseInt(that.$refs.noticeItemTop.children[i].style.left) -
                563 +
                "px";
              if (
                parseInt(that.$refs.noticeItemTop.children[i].style.left) >563||
                parseInt(that.$refs.noticeItemTop.children[i].style.left) <-563
              ) {
                that.$refs.noticeItemTop.children[i].style.transition = "none";
              } else {
                that.$refs.noticeItemTop.children[i].style.transition =
                  "all 1s";
              }
              if (
                parseInt(that.$refs.noticeItemTop.children[i].style.left) ==
                -563 * (that.$refs.noticeItemTop.children.length - 1)
              ) {
                that.$refs.noticeItemTop.children[i].style.left = 563 + "px";
              }
            } else if (that.typeValue == "right") {
              that.$refs.noticeItemTop.children[i].style.right =
                parseInt(that.$refs.noticeItemTop.children[i].style.right) -
                563 +
                "px";
              if (
                parseInt(that.$refs.noticeItemTop.children[i].style.right) >563||
                parseInt(that.$refs.noticeItemTop.children[i].style.right) <-563
              ) {
                that.$refs.noticeItemTop.children[i].style.transition = "none";
              } else {
                that.$refs.noticeItemTop.children[i].style.transition =
                  "all 1s";
              }
              if (
                parseInt(that.$refs.noticeItemTop.children[i].style.right) ==
                -563 * (that.$refs.noticeItemTop.children.length - 1)
              ) {
                that.$refs.noticeItemTop.children[i].style.right = 563 + "px";
              }
            }
          }
        }
      }, 3000);
    },
  },
};
</script>
<style scoped lang="scss">
.h-notice {
  position: relative;

  .h-notice-left {
    height: 30px;
    line-height: 30px;
    float: left;

    div {
      float: left;
    }


    .notice-left-img {
      display: table;

      img {
        vertical-align: middle;
      }
      .iconfont {
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
    overflow: hidden;

    .notice-ov {
      width: 100%;
      // position: absolute;
      // transition: all .5s;

      .notice-item {
        float: left;
        width: 100%;
        cursor: pointer;
        position: absolute;
        transition: all 0.5s;

        .notice-info-text {
          max-width: 87%;
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          float: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .notice-info-img {
          float: right;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
