<template>
  <div
    :class="[type == 'up' ? 'de-info-right' : 'de-info-right1']"
    :style="{
      height: type == 'up' ? num * 235 - 15 + 100 + 'px' : '',
      width: type != 'up' ? num * 190 - 30 + 'px' : '',
    }"
  >
    <div v-if="hotList.length > num" class="hot-top" @click="hotUp">
      <h-icon v-if="type == 'up'" types="h-xiangshang" /><h-icon
        v-else
        types="h-xiangzuo1"
      />
    </div>
    <div v-if="hotList.length > num" class="hot-bottom" @click="hotDown">
      <h-icon v-if="type == 'up'" types="h-xiangxia" /><h-icon
        v-else
        types="h-xiangyou2"
      />
    </div>
    <div
      class="de-list"
      :style="{ height: type == 'up' ? num * 235 - 15 + 'px' : '' }"
    >
      <div
        class="ov-list"
        :style="{
          bottom: type == 'up' ? poTop + 'px' : '',
          right: type != 'up' ? poTop + 'px' : '',
        }"
      >
        <slot name="de-infos" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hHotProduct",
  props: {
    hotList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    type: {
      type: String,
      default: "",
    },
    num: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      poTop: 0, // 热门推荐偏移
    };
  },
  created() {},
  methods: {
    hotUp() {
      let num = this.type == "up" ? 235 : 190;
      if (this.poTop == 0) {
      } else {
        this.poTop = this.poTop - num;
      }
    },
    hotDown() {
      let allNum;
      let num = this.type == "up" ? 235 : 190;
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
    height: 20px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    width: 63px;
    background-color: #999;
    opacity: 0.6;
  }
  .hot-top:hover {
    opacity: 0.8;
  }
  .hot-bottom:hover {
    opacity: 0.8;
  }
  .hot-bottom {
    position: absolute;
    bottom: 0px;
    right: 0px;
    cursor: pointer;
    height: 20px;
    opacity: 0.6;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    width: 63px;
    background-color: #999;
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
    height: 63px;
    line-height: 63px;
    text-align: center;
    color: #ffffff;
    width: 19px;
    background-color: #999;
    position: absolute;
    top: 50%;
    margin-top: -59px;
    left: 0px;
    z-index: 10;
    cursor: pointer;
    opacity: 0.6;
  }
  .hot-top:hover {
    opacity: 0.8;
  }
  .hot-bottom:hover {
    opacity: 0.8;
  }
  .hot-bottom {
    height: 63px;
    line-height: 63px;
    text-align: center;
    color: #ffffff;
    width: 19px;
    background-color: #999;
    position: absolute;
    top: 50%;
    margin-top: -59px;
    right: 0px;
    z-index: 10;
    cursor: pointer;
    opacity: 0.6;
  }
}
</style>
