<template>
  <div v-if="stockDetail">
    <h4>{{ stockDetail.idxNm }} ({{ stockDetail.basIdx }})</h4>

    <div id="nav">
        <router-link :to="{ name: 'StockDetail' }">
            Detail
        </router-link>
        |
        <router-link :to="{ name: 'StockNews' }">
            News
        </router-link>
        |
        <router-link :to="{ name: 'StockInterest' }">
            Interest
        </router-link>
    </div>
    <router-view :stockDetail="stockDetail" />
  </div>
</template>

<script>
import StockService from '@/services/StockService.js'


export default ({
    // add props for dynamic routing
    props: ['idxNm'],
    data() {
        return {
            stockDetail: null,
        }
    },
    created() {
        StockService.getMarketIndex(this.idxNm)
        .then(response => {
            this.stockDetail = response.data.response.body.items.item[0];
        })
        .catch(error => {
        console.log(error)
        })
    }
})
</script>
