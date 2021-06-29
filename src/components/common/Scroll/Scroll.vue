<template>
<div class="wrapper" ref="scroll">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    pollUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    /**
     * 创建Scroll对象
     * */
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pollUpLoad
    })

    /**
     * 监听滚动事件
     */
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
    }

    /**
     * 监听滚动到底部
     */
    if (this.pollUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },

    /**
     * 重新刷新
     */
    refresh() {
      this.scroll && this.scroll.refresh()
    },

    /**
     * 结束上拉加载函数
     */
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },

    /**
     * 获取scroll的纵向滚动的距离
     * */
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>
