import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {
  // 创建组件构造器
  const toastConstructer = Vue.extend(Toast)
  // new 构造器，创建出一个组件对象
  const toast = new toastConstructer()
  // 将这个组件对象手动的挂在到某个元素
  toast.$mount(document.createElement('div'))
  // 在将这个模板（div)添加到body里面
  document.body.appendChild(toast.$el)

  // 将组件对象挂在到Vue.prototype上
  Vue.prototype.$toast = toast
}

export default obj
