<template>
  <h1>Stock prices</h1>

  <div class="container">

      <div class="page-bar">
        <router-link class="page-button left"
          :to="{ name: 'StockList', query: { pageNo: pageNo - 1 }}"
          v-if="pageNo > 1" >
          &#60; Prev Page
        </router-link>
        <div class="page-button number-line"></div>
        <router-link class="page-button right"
          :to="{ name: 'StockList', query: { pageNo: pageNo + 1 }}"
          v-if="hasNextPage"> 
          Next Page &#62;
        </router-link>
      </div>
  <div class="stocks">
    <StockCard v-for="(stock, index) in stocks" :key="index" :stock="stock" />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StockCard from '@/components/StockCard.vue'
import StockService from '@/services/StockService.js'
import { watchEffect} from 'vue'

export default {
  name: 'StockList',
  props: ['pageNo', 'perPage'], // pagination: get page number
  components: {
    StockCard
  },
  data() {
    return {
      stocks: null,
      totalStocks: 0,
      lastPage: 0,

    }
  },
  mounted(){
  },
  created() { 
    watchEffect(() => {
      StockService.getMarketIndexList(this.perPage, this.pageNo)
      .then(response => {
        console.log(response.data);
        this.stocks = response.data.response.body.items.item;
        this.totalStocks = response.data.response.body.totalCount;
        this.lastPage = Math.ceil(this.totalStocks / this.perPage);
      })
      .catch(error => {
        console.log(error)
      })
    })
  },
  computed: {
    hasNextPage () {
      return this.lastPage > this.pageNo
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0% 10% 0% 10%;

}
.stocks {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  border: solid gray 1px;
}
.page-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #eeeeee;
  width: 100%;
  max-width: 50em;
}


</style>