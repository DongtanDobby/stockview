<template>
  <h1>Stock prices</h1>

  <div class="stocks">
    <StockCard v-for="stock in stocks" :key="stock.basIdx" :stock="stock" />
  </div>
</template>

<script>
// @ is an alias to /src
import StockCard from '@/components/StockCard.vue'
import axios from 'axios'

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
    axios.get(process.env.VUE_APP_URL_GONGGONG)
    .then(response => {
      console.log('stocks:', response.data);
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