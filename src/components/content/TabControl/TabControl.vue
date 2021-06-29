<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" @click="itemClick(index)" :class="{active: index == currentIndex}" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #ffffff;
    z-index: 9;
  }

  .tab-control .tab-control-item {
    flex: 1;
  }

  .tab-control .tab-control-item > span {
    padding: 5px;
  }

  .tab-control .tab-control-item.active > span {
    border-bottom: 2px solid var(--color-high-text);
  }

  .active {
    color: var(--color-high-text);
  }
</style>
