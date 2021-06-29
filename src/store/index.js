import Vue from "vue";
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

// 1. 安装
Vue.use(Vuex)

// 2. 创建对象
const state = {
  cartList: [], // 存储购物车里的所有信息
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

// 导出
export default store
