import {ADD_COUNT, ADD_TO_CART} from "./mutation-types";
export default  {
  /**
   * 用来记录增加同一个商品的数量
   * @param state
   * @param oldProduct
   */
  [ADD_COUNT](state, oldProduct) {
    oldProduct.count += 1
  },
  /**
   * 添加不同的商品存储到数组中
   * @param state
   * @param payload
   */
  [ADD_TO_CART](state, payload) {
    // 默认为true，表示这个商品被选中
    payload.checked = true
    state.cartList.push(payload)
  }
}
