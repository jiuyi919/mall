<template>
  <div class="goods-info" v-if="Object.keys(detailINfo).length !== 0">
    <div class="goods-top" v-if="detailINfo.desc">
      <div class="square before"></div>
      <div class="goods-desc">{{detailINfo.desc}}</div>
      <div class="square after"></div>
    </div>
    <div class="goods-key">{{detailINfo.detailImage[0].key}}</div>
    <div class="goods-list">
      <img v-for="(item, index) in detailINfo.detailImage[0].list"
           :src="item" alt=""
           :key="index"
           @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailINfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imgLength: 0
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imgLength) {
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    /***
     * 监测detailINfo数据的变化，来获取图片的数量
     */
    detailINfo() {
      this.imgLength = this.detailINfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>

.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.goods-info .goods-top {
  padding-left: 15px;
  position: relative;
}

.goods-info .goods-top .square {
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
}

.goods-info .goods-top .before {
  top: -5px;
  left: 15px;
}

.goods-info .goods-top .after {
  bottom: 0;
  right: 0;
}

.goods-info .goods-top::before,
.goods-info .goods-top::after {
  content: "";
  display: block;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: absolute;
}

.goods-info .goods-top::after {
  bottom: 0;
  right: 5px;
}

.goods-info .goods-top .goods-desc {
  padding: 15px 0;
  font-size: 14px;
}

.goods-info .goods-key {
  font-size: 15px;
  color: #333;
  margin: 10px 0 10px 15px;
}

.goods-info .goods-list img {
  width: 100%;
}

</style>
