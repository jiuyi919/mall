<template>
  <div class="shop-bottom">
    <div class="shop-checked">
      <check-button class="checked-circle" :is-checked="isSelectedAll" @click.native="btnClick(isSelectedAll)"/>
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计：{{totalPrice}}</span>
    </div>
    <div class="calculate" @click="calcClick">
      <span>去计算({{cartListLen}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import {mapGetters} from 'vuex'
export default {
  name: "ShopBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    /**
     * 计算总价
     */
    totalPrice() {
      return '￥' + this.cartList.filter(item => item.checked).reduce((preValue, item) => preValue + item.newPrice * item.count ,0).toFixed(2)
    },
    /**
     * 获取选中的不同商品的数量
     */
    cartListLen() {
      return this.cartList.filter(item => item.checked).length
    },
    /**
     * 判断商品是否是全部选中，如果是则返回true，否则返回false
     */
    isSelectedAll() {
      // 如果数据为空的话，直接返回false
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    }
  },
  methods: {
    /**
     * 点击时，让其全部选中或者是全部不选中
     * @param isSelectedAll 表示当前全部选中的状态
     */
    btnClick(isSelectedAll) {
      // 如果是全选的状态下，那么点击就将所有的商品取消选中状态，否则全部选中
      // if (this.isSelectedAll) {
      //   this.cartList.forEach(item => item.checked = false)
      // } else {
      //   this.cartList.forEach(item => item.checked = true)
      // }
      this.cartList.forEach(item => item.checked = !isSelectedAll)
    },
    /**
     * 点击计算弹出相应的内容
     */
    calcClick() {
      if (this.cartList.length === 0) {
        this.$toast.show('当前购物车为空')
      } else {
        let flag = false
        for(let item of this.cartList) {
          if (item.checked) {
            this.$toast.show('计算总价' + this.totalPrice + '元')
            flag = true
            break
          }
        }
        // 判断是不是全部都没有选中
        if (!flag) {
          this.$toast.show('当前购物车没有选中商品')
        }
      }
    }
  }
}
</script>

<style scoped>
.shop-bottom {
  height: 40px;
  position: fixed;
  bottom: 49px;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  font-size: 14px;
}

.shop-bottom .shop-checked {
  display: flex;
  align-items: center;
  flex: 1;
  margin-right: 10px;
}

.shop-bottom .shop-checked .checked-circle {
  margin-left: 10px;
  margin-right: 5px;
}

.shop-bottom .total {
  flex: 2;
  line-height: 40px;
  font-size: 16px;
}

.shop-bottom .calculate {
  flex: 2;
  text-align: center;
  line-height: 40px;
  background-color: red;
  color: #fff;
}
</style>
