<template>
  <h1>Stock prices</h1>

  <div class="stocks">
    <StockCard v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
// @ is an alias to /src
import StockCard from '@/components/StockCard.vue'

export default {
  name: 'StockList',
  components: {
    StockCard
  },
  data() {
    return {
      stocks: [
      {id: 123412,
        title: 'Stock Name',
        date: 'Jan 17, 2022',
        price: '34,456,000',
      },
      {id: 123412,
        title: 'Stock Name',
        date: 'Jan 17, 2022',
        price: '34,456,000',
      },
      {id: 123412,
        title: 'Stock Name',
        date: 'Jan 17, 2022',
        price: '34,456,000',
      },
      {id: 123412,
        title: 'Stock Name',
        date: 'Jan 17, 2022',
        price: '34,456,000',
      },
    ]

    }
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