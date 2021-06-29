<template>
<div class="recommend">
  <div v-for="item in recommend" class="recommend-list">
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
    <div>{{item.title}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: var(--color-text);
  padding: 10px 0 30px 0;
  border-bottom: 10px solid #eee;
}

.recommend .recommend-list {
  flex: 1;
}

.recommend .recommend-list img {
  width: 80%;
  vertical-align: middle;
  margin-bottom: 10px;
}
</style>
