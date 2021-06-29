<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 ref="tabContent1"
                 v-show="isTabContentFixed"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :poll-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banner="banner"
                   @imgLoad="imgLoad"/>
      <home-recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabContent2"
                   v-show="!isTabContentFixed"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <!--  返回顶部组件  -->
    <back-top @click.native="backTop" v-show="scrollShow"/>
  </div>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/TabControl/TabControl";
import GoodsList from "components/content/Goods/GoodsList";
import Scroll from "components/common/Scroll/Scroll";

// Home子组件
import HomeSwiper from "./ChildComps/HomeSwiper";
import HomeRecommendView from "./ChildComps/HomeRecommendView";
import FeatureView from "./ChildComps/FeatureView";

// 其它js文件
import {
  getHomeMultidata,
  getHomeGoods
} from "network/home";
import {itemMixin, backTopMixin} from "common/mixin";

export default {
  name: "Home",
  mixins: [itemMixin, backTopMixin],
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    getHomeGoods
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: 'pop',
      tabOffsetTop: 0,  // 记录tabContent的offsetTop值
      isTabContentFixed: false, // tabContent是否加fixed定位
      saveY: 0, // 保存离开home时候的scroll滚动的值
    }
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
  },
  activated() {
    // 立马回到当前Y值相对应的地方
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // 可能会出现bug，强制做一次刷新
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 保存滚动的Y的值
    this.saveY = this.$refs.scroll.getScrollY()
    // 解除图片加载完成的事件
    this.$bus.$off('itemImgLoad', this.imgLoadEvent)
  },
  computed: {
    // 更具type展示相应的商品信息
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    // 网络请求相关
    /**
     * 获取home的multidata数据
     * */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },

    /**
     * 获取所有的商品数据
     * */
    getHomeGoods(type) {
      // 每次请求的page都应该在当前page加1
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        // 将数据进行存储
        this.goods[type].page += 1
        this.goods[type].list.push(...res.data.list) // 将所有的list数据一个个push到goods.list中
        this.$refs.scroll.finishPullUp()
      })
    },

    // 页面逻辑处理相关
    /**
     * 通过点击tabContent来获取相应的type值
     * */
    tabClick(index) {
      switch (index) {
        case 0: {
          this.currentType = 'pop'
          break
        }
        case 1: {
          this.currentType = 'new'
          break
        }
        case 2: {
          this.currentType = 'sell'
          break
        }
      }
      // 将index值赋给两个tabContent的currentIndex，使其一致
      this.$refs.tabContent1.currentIndex = index
      this.$refs.tabContent2.currentIndex = index
    },
    /**
     * 滚动事件逻辑，大于1000px就显示top按钮，否则就隐藏
     * @param position
     */
    contentScroll(position) {
      // 调用方法来判断是否显示返回顶部按钮
      this.backTopShow(position)
      // 判断tabContent的滚动距离
      this.isTabContentFixed = Math.abs(position.y) > this.tabOffsetTop
    },

    /**
     * 上拉加载更多，向服务器请求数据
     */
    loadMore() {
      this.getHomeGoods(this.currentType)
    },

    imgLoad() {
      // 拿到tabContent的offsetTop值赋给tabOffsetTop
      this.tabOffsetTop = this.$refs.tabContent2.$el.offsetTop
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

/* 因为better-scroll中的原理是translate值的偏移，所以就算是里面的元素进行fixed定位，也会随之进行偏移 */
/*.tabContentFixed {*/
/*  position: fixed;*/
/*  top: 44px;*/
/*}*/

.content {
  /*background-color: #fff;*/
  height: calc(100vh - 93px);
  overflow: hidden;
}

</style>
