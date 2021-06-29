<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <shop-list/>
    <!--  底部计算bar  -->
    <shop-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import ShopList from "./ChildComps/ShopList";
import ShopBottomBar from "./ChildComps/ShopBottomBar";

import {mapGetters} from 'vuex'

export default {
  name: "Shop",
  components: {
    NavBar,
    ShopList,
    ShopBottomBar
  },
  computed: {
    // cartLength() {
    //  return this.$store.getters.cartLength
    // }
    /**
     * 获取购物车不同商品的数量
     */
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.cart .cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.cart .content {
  height: calc(100vh - 44px - 49px);
}
</style>
