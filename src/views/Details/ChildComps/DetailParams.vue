<template>
  <div class="detail-param">
    <table class="param-table" v-for="(table, index) in detailParams.sizes" :key="index">
      <tr v-for="(tr, index) in table" :key="index" class="param-tr">
        <td v-for="(td, index) in tr" :key="index" class="param-td">{{td}}</td>
      </tr>
    </table>
    <table class="param-table">
      <tr class="param-tr" v-for="(tr, index) in detailParams.infos" :key="index">
        <td class="param-td param-td-key">{{tr.key}}</td>
        <td class="param-td param-td-value">{{tr.value}}</td>
      </tr>
    </table>
    <div class="img-info" v-if="detailParams.image">
      <img :src="detailParams.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    detailParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.detail-param {
  padding: 20px 0 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.detail-param .param-table {
  width: 100%;
  border-collapse: collapse;
}

.detail-param .param-table .param-tr {
  height: 42px;
  line-height: 42px;
}

.detail-param .param-table .param-tr .param-td {
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}

.detail-param .param-table .param-tr .param-td-key {
  width: 95px;
}

.detail-param .param-table .param-tr .param-td-value {
  color: #eb4868;
}

.detail-param .img-info img {
  width: 100%;
}
</style>
