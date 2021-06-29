<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
  #tab-bar {
    width: 100vw;
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    bottom: 0;
    z-index: 20;

    text-align: center;
    font-size: 14px;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }


</style>
