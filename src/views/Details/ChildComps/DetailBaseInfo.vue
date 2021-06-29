<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-info">
    <div class="detail-title">{{goods.title}}</div>
    <div class="goods-price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="goods-other">
      <span class="goods-other-1">{{goods.columns[0]}}</span>
      <span class="goods-other-2">{{goods.columns[1]}}</span>
      <span class="goods-other-3">{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="goods-services">
      <span v-for="index in goods.services.length" class="goods-services-item" v-if="goods.services[index - 1].icon">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-info {
  padding-left: 8px;
  padding-top: 15px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.detail-title {
  color: #222;
  margin-bottom: 15px;
}

.goods-price {
  margin-bottom: 15px;
}

.goods-price .newPrice {
  font-size: 24px;
  color: var(--color-high-text);
}

.goods-price .oldPrice {
  font-size: 13px;
  text-decoration: line-through;
  margin-left: 5px;
}

.goods-price .discount {
  font-size: 12px;
  color: #ffffff;
  border-radius: 8px;
  padding: 2px 5px;
  background-color: var(--color-high-text);
  position: relative;
  left: 6px;
  top: -8px;
}

.goods-other {
  display: flex;
  line-height: 30px;
  font-size: 13px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}

.goods-services {
  display: flex;
  color: #999;
  font-size: 13px;
  flex-flow: wrap;
  padding-bottom: 20px;
}

.goods-services .goods-services-item {
  margin-left: 20px;
  margin-top: 20px;
}

.goods-services img {
  width: 14px;
  height: 14px;
  vertical-align: -2px;
  margin-right: 2px;
}

</style>
