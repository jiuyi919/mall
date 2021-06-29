export default {
  /**
   * 获取购物车中有多少商品（不同的商品）
   * @param state
   * @returns {number}
   */
  cartLength(state) {
    return state.cartList.length
  },
  /**
   * 获取购物车信息（数据）
   * @param state
   * @returns {[]}
   */
  cartList(state) {
    return state.cartList
  }
}
