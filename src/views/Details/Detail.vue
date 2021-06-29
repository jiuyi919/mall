<template>
<div id="detail">
  <detail-item class="nav-top" @titleClick="scrollClick" ref="nav"/>
  <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
    <detail-swiper :top-images="topImages" ref="swiper"/>
    <detail-base-info :goods="goods"/>
    <detail-ship-info :shop="shop"/>
    <detail-goods-info :detail-i-nfo="detailInfo" @imgLoad="detailImgLoad"/>
    <detail-params :detail-params="detailParams" ref="params"/>
    <detail-comment :comment-info="comment" ref="comment"/>
    <goods-list :goods="recommend" ref="recommend"/>
  </scroll>
  <detail-bottom-bar @addCart="addCart"/>
  <back-top @click.native="backTop" v-show="scrollShow"/>
</div>
</template>

<script>

// 公共组件
import Scroll from "components/common/Scroll/Scroll";
import GoodsList from "components/content/Goods/GoodsList";
// 子组件
import DetailItem from "./ChildComps/DetailItem";
import DetailSwiper from "./ChildComps/DetailSwiper";
import DetailBaseInfo from "./ChildComps/DetailBaseInfo";
import DetailShipInfo from "./ChildComps/DetailShipInfo";
import DetailGoodsInfo from "./ChildComps/DetailGoodsInfo";
import DetailParams from "./ChildComps/DetailParams";
import DetailComment from "./ChildComps/DetailComment";
import DetailBottomBar from "./ChildComps/DetailBottomBar";

// 其它js文件
import {
  getDetails,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";
import {itemMixin, backTopMixin} from "common/mixin";

export default {
  name: "Detail",
  mixins: [itemMixin, backTopMixin],
  data() {
    return {
      id: null,  // 保存路由的参数id
      topImages: [], // 保存详情页轮播图信息
      goods: {}, // 保存商品信息
      shop: {}, // 存储店铺信息
      detailInfo: {}, // 存储详情图片和文字信息
      detailParams: {}, // 存储商品参数的信息,
      comment: {}, // 存储评论信息,
      recommend: [], // 存储推荐信息
      scrollTopY: [], // 用于存储相对应组件的滚动的距离
      currentIndex: 0, // 用于存储滚动时相对应的index值
      message: '', // 存储弹框中的内容
      isShow: false, // 存储弹窗是否进行展示
    }
  },
  components: {
    Scroll,
    GoodsList,
    DetailItem,
    DetailSwiper,
    DetailBaseInfo,
    DetailShipInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    DetailBottomBar
  },
  created() {
    this.id = this.$route.params.id  // 获取id赋值给id
    /***
     * 获取详情页部分数据
     */
    getDetails(this.id).then(res => {
      const data = res.result
      // 轮播图片信息
      this.topImages = data.itemInfo.topImages
      // 商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 店铺信息
      this.shop = new Shop(data.shopInfo)
      // 详情图片和文字数据
      this.detailInfo = data.detailInfo
      // 获取商品的参数信息
      this.detailParams = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 获取评论信息
      if (data.rate.list) {
        this.comment = data.rate.list[0]
      }
    })
    /***
     * 获取详情页的推荐数据
     */
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.imgLoadEvent)
  },
  methods: {
    detailImgLoad() {
      // 刷新scroll重新计算内容的高度
      this.$refs.scroll.refresh()
      this.scrollTopY.push(this.$refs.swiper.$el.offsetTop)
      this.scrollTopY.push(this.$refs.params.$el.offsetTop)
      this.scrollTopY.push(this.$refs.comment.$el.offsetTop)
      this.scrollTopY.push(this.$refs.recommend.$el.offsetTop)
      // 加入一个js最大值，用于最后的判断条件
      this.scrollTopY.push(Number.MAX_VALUE)
    },
    scrollClick(index) {
      // 拿到index相对应的滚动的top值，进行滚动
      this.$refs.scroll.scrollTo(0, -this.scrollTopY[index], 500)
    },
    /**
     * 滚动的时候回到某个位置相对应的nav
     * @param position
     */
    contentScroll(position) {
      const len = this.scrollTopY.length
      const positionY = -position.y

      /***
       * 第一种方法，性能不太好，条件判断太多
       */
      // for(let i in this.scrollTopY) {
      //   if (
      //     (this.currentIndex !== parseInt(i) && ((i < len - 1 && positionY >= this.scrollTopY[parseInt(i)] && positionY < this.scrollTopY[parseInt(i)+1])
      //     || (parseInt(i) === len - 1 && positionY >= this.scrollTopY[parseInt(i)])))
      //   ) {
      //     this.currentIndex = parseInt(i)
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }

      /***
       * 第二种方法通过给数组中增加一个最大值，（永远不能达到的值）进行判断
       */
      for(let i = 0; i < len - 1; i++) {
        if (this.currentIndex !== i && (positionY >= this.scrollTopY[i] && positionY < this.scrollTopY[i+1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      // 调用方法，是否显示返回顶部按钮
      this.backTopShow(position)
    },
    addCart() {
      // 1. 将有用的数据存储到一个对象里面
      const product = {}
      product.iid = this.id
      product.imgUrl = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.newPrice = this.goods.nowPrice
      // 2. 要将数据放入vuex中进行保存
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 1500)
      })
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 21;
  background-color: #fff;
}

.nav-top {
  background-color: #fff;
}

.content {
  height: calc(100vh - 44px - 58px);
  overflow: hidden;
}

</style>
