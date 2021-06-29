<template>
  <div class="check-button" :class="{isChecked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #666666;
}

.isChecked {
  border: none;
  background-color: red;
}

.check-button img {
  vertical-align: middle;
}
</style>
