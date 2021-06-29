<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <shop-list-item v-for="(item, index) in cartList" :key="index" :cart-list="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/Scroll/Scroll";

import {mapGetters} from 'vuex'

import ShopListItem from "./ShopListItem";

export default {
  name: "ShopList",
  components: {
    ShopListItem,
    Scroll
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list .content {
  height: calc(100vh - 44px - 49px);
}
</style>
