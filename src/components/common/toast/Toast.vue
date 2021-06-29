<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='以添加商品', duration=1500) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, duration)
    }
  }

}
</script>

<style scoped>
.toast {
  position: fixed;
  background-color: rgba(0, 0, 0, .75);
  color: #fff;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 30;
  padding: 8px 10px;
  font-size: 14px;
}
</style>
