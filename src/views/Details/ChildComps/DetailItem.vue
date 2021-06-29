<template>
  <nav-bar>
    <div slot="left" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles"
           class="title-item"
           :class="{active: index === currentIndex}"
           @click="titleClick(index)">
        {{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar";


export default {
  name: "DetailItem",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    /**
     * 回退功能
     */
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
}

.title .title-item {
  flex: 1;
}

.title .title-item.active {
  color: var(--color-high-text)
}

img {
  vertical-align: middle;
}
</style>
