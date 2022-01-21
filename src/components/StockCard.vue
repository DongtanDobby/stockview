<template>
<router-link :to="{ name:'StockDetail', params: {'idxNm': stock.idxNm} }">

  <div class="stock-card">
    <!-- Display stock data -->
    <h4>{{ stock.idxNm }} ({{ stock.basIdx }})</h4>
    <h5>{{ stock.basDt }}</h5>
    <h4>{{ stock.clpr }} ({{ stock.vs }}, {{ stock.fltRt}}%) </h4>
  </div>
</router-link>
</template>

<script>
import StockService from '@/services/StockService.js'

export default {
  name: 'StockCard',
  props: {
    stock: Object,
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stock-card {
  padding: 20px;
  width: 250px;
  height: 200px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin: 10px 10px 10px 10px;
}
.stock-card:hover{
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
