<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-top">
      <img :src="shop.logo" alt="" class="shop-top-img">
      <span class="shop-top-name">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div class="info-sell">
          <div class="sell-count shop-count">{{shop.sells | sellCountFilter}}</div>
          <div class="sell-text shop-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count shop-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text shop-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td class="name">{{item.name}}</td>
            <td class="score" :class="{isHeight: item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{isBetter: item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShipInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value
      return (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 25px 0 25px 8px;
}

.shop-info .shop-top {
  display: flex;
  height: 45px;
  line-height: 45px;
}

.shop-info .shop-top .shop-top-img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, .1);
  margin-right: 10px;
}

.shop-info .shop-middle {
  display: flex;
  margin-top: 15px;
  align-items: center;
}

.shop-info .shop-middle .shop-middle-item {
  flex: 1;
}

.shop-info .shop-middle .shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, .1);
}

.shop-info .shop-middle .shop-middle-left .shop-count {
  font-size: 18px;
}

.shop-info .shop-middle .shop-middle-left .shop-text {
  font-size: 12px;
  margin-top: 10px;
}

.shop-info .shop-middle .shop-middle-right {
  color: #333;
  font-size: 13px;
  display: flex;
  justify-content: center;
}

.shop-info .shop-middle .shop-middle-right tr td {
  padding: 5px 4px;
}

.shop-info .shop-middle .shop-middle-right .score {
  color: #42b983;
}

.shop-info .shop-middle .shop-middle-right .isHeight {
  color: var(--color-high-text);
}

.shop-info .shop-middle .shop-middle-right .better {
  color: #fff;
}

.shop-info .shop-middle .shop-middle-right .better span {
  background-color: #42b983;
}

.shop-info .shop-middle .shop-middle-right .isBetter span {
  background-color: var(--color-high-text);
}

.shop-bottom {
  margin-top: 10px;
}

.shop-bottom .enter-shop {
  width: 150px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  margin: 0 auto;
  background-color: #f2f5f8;
  border-radius: 10px;
}
</style>
