<template>
  <div class="goods-item" @click="goodsItemClick">
    <img v-lazy="showImage" alt="" @load="imgLoad">
    <div class="goods-item-text">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    goodsItemClick() {
      // 跳转到详情页并给路由传递一个参数值：id
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods-item {
  width: 45%;
  font-size: 12px;
  text-align: center;
  padding-bottom: 40px;
  position: relative;
}

.goods-item img {
  width: 100%;
  vertical-align: middle;
}

.goods-item .goods-item-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
}

.goods-item .goods-item-text p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.goods-item .goods-item-text .price {
  color: var(--color-high-text);
  margin-right: 5px;
}

.goods-item .goods-item-text .collect::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/ 14px 14px;
  vertical-align: -2px;
}
</style>
