<template>
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-header">
      <div class="comment-title">用户评价</div>
      <div class="more">
        <span>更多</span>
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="comment-content">
      <div class="comment-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span class="comment-name">{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment-bottom">
        <p class="content">{{commentInfo.content}}</p>
        <div class="comment-other">
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span class="comment-style">{{commentInfo.style}}</span>
        </div>
        <div class="comment-img">
          <img v-for="(item, index) in commentInfo" :src="item" alt="" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/Utiles";

export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>

.detail-comment {
  padding: 5px 0 5px 12px;
}

.detail-comment .comment-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.detail-comment .comment-header .comment-title {
  float: left;
}

.detail-comment .comment-header .more {
  float: right;
}

.detail-comment .comment-header .more .arrow-right {
  width: 9px;
  height: 9px;
  border-left: 1px solid #999;
  border-top: 1px solid #999;
  display: inline-block;
  transform: rotate(135deg);
  margin-right: 1rem;
}

.detail-comment .comment-content .comment-user {
  padding: 10px 0 5px 0;
}

.detail-comment .comment-content .comment-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.detail-comment .comment-content .comment-user .comment-name {
  font-size: 15px;
  vertical-align: 15px;
  margin-left: 10px;
}

.detail-comment .comment-content .comment-bottom .content {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.detail-comment .comment-content .comment-bottom .comment-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.detail-comment .comment-content .comment-bottom .comment-other .date {
  margin-right: 5px;
}

</style>
