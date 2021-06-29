<template>
<div class="nav-bar">
  <div class="nav-bar-left">
    <slot name="left"></slot>
  </div>
  <div class="nav-bar-center">
    <slot name="center"></slot>
  </div>
  <div class="nav-bar-right">
    <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .05);
  position: sticky;
  top: 0;
  z-index: 9;
}
.nav-bar .nav-bar-left,
.nav-bar .nav-bar-right {
  width: 60px;
}

.nav-bar .nav-bar-center {
  flex: 1;
}
</style>
