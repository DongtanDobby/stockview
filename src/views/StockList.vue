<template>
  <h1>Stock prices</h1>

  <div class="stocks">
    <StockCard v-for="(stock, index) in stocks" :key="index" :stock="stock" />
  </div>
</template>

<script>
// @ is an alias to /src
import StockCard from '@/components/StockCard.vue'
import StockService from '@/services/StockService.js'

export default {
  name: 'StockList',
  components: {
    StockCard
  },
  data() {
    return {
      stocks: null

    }
  },
  mounted(){
  },
  created() { 
    StockService.getMarketIndexList()
    .then(response => {
      this.stocks = response.data.response.body.items.item;
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
.stocks {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>