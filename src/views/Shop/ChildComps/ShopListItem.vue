<template>
  <div class="shop-item">
    <div class="check-button1">
      <div>
        <check-button :is-checked="cartList.checked" @click.native="changeChecked"/>
      </div>
    </div>
    <div class="shop-img">
      <img :src="cartList.imgUrl" alt="商品图片">
    </div>
    <div class="cart-info">
      <div class="cart-title">{{cartList.title}}</div>
      <div class="cart-desc">商品描述：{{cartList.desc}}</div>
      <div class="cart-bottom clearfix">
        <div class="left">￥{{cartList.newPrice}}</div>
        <div class="right">x{{cartList.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "ShopListItem",
  props: {
    cartList: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    changeChecked() {
      this.cartList.checked = !this.cartList.checked
    }
  }
}
</script>

<style scoped>
.shop-item {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.shop-item .check-button1 {
  display: flex;
  width: 14%;
  justify-content: center;
  align-items: center;
}

.shop-item .check-button1 .check-button-origin {
  width: 18px;
  height: 18px;
}

.shop-item .shop-img {
  padding: 5px;
}

.shop-item .shop-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
  display: block;
}

.shop-item .cart-info {
  padding: 5px 10px;
  overflow: hidden;
}

.shop-item .cart-info .cart-title,
.shop-item .cart-info .cart-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shop-item .cart-info .cart-title {
  color: #333;
  font-size: 17px;
}

.shop-item .cart-info .cart-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.shop-item .cart-info .cart-bottom {
  margin-top: 30px;
}

.shop-item .cart-info .cart-bottom .left {
  float: left;
  color: orangered;
}

.shop-item .cart-info .cart-bottom .right {
  float: right;
}

.clearfix::before,
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
