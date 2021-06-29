import {ADD_COUNT, ADD_TO_CART} from "./mutation-types";

export default {
  /**
   * 操作cart数组，给数组中添加相应的数据等业务处理
   * @param context
   * @param payload
   */
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null
      // 处理避免相同的产品添加进来
      oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 判断是否有相同的产品，如果有，就count加1， 没有添加count为1

      // if (oldProduct) {
      //   context.commit('addCount', oldProduct)
      // } else {
      //   payload.count = 1
      //   context.commit('addToCart', payload)
      // }

      oldProduct ? (context.commit(ADD_COUNT, oldProduct),resolve('当前商品数量加1')) :
        (payload.count = 1 , context.commit(ADD_TO_CART, payload),resolve('当前商品已加入购物车'))
    })
  }
}
