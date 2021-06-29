import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home/Home')
const Category = () => import('views/Category/Category')
const Shop = () => import('views/Shop/Shop')
const Profile = () => import('views/Profile/Profile')
const Detail = () => import('views/Details/Detail')

// 1. 安装插件
Vue.use(VueRouter)

// 创建vue-router对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/detail/:id',
    component: Detail,
    meta: {
      title: '详细页'
    }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, form, next) => {
  next()
  document.title = to.matched[0].meta.title;
})
export default router
