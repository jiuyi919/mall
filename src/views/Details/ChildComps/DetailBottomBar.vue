<template>
  <div class="detail-bottom">
    <div class="detail-bottom-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="detail-bottom-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.detail-bottom {
  height: 58px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  z-index: 30;
  width: 100%;
  display: flex;
  text-align: center;
}

.detail-bottom .detail-bottom-left,
.detail-bottom .detail-bottom-right {
  flex: 1;
}

.detail-bottom .detail-bottom-left {
  display: flex;
  font-size: 13px;
}

.detail-bottom .detail-bottom-left>div {
  flex: 1;
}

.detail-bottom .detail-bottom-left .icon {
  background: url("~assets/img/detail/detail_bottom.png") 0 0/ 100%;
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
}
.detail-bottom .detail-bottom-left .service {
  background-position: 0 -54px;
}

.detail-bottom .detail-bottom-left .shop {
  background-position: 0 -98px;
}

.detail-bottom .detail-bottom-right {
  font-size: 15px;
  line-height: 58px;
  display: flex;
}

.detail-bottom .detail-bottom-right>div {
  flex: 1;
}

.detail-bottom .detail-bottom-right .cart {
  background: #ffe817;
  color: #333;
}

.detail-bottom .detail-bottom-right .buy {
  background-color: #f69;
  color: #ffffff;
}

</style>
