<template>
  <div v-if="stockDetail">
    <h4>{{ stockDetail.idxNm }} ({{ stockDetail.basIdx }})</h4>
    <h5>{{ stockDetail.basDt }}</h5>
    <h4>{{ stockDetail.clpr }} ({{ stockDetail.vs }}, {{ stockDetail.fltRt}}%) </h4>
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
            params: {
                'idxNm': this.idxNm,
            }
        }
    },
    created() {
        StockService.getMarketIndex(this.params)
        .then(response => {
            this.stockDetail = response.data.response.body.items.item[0];
        })
        .catch(error => {
        console.log(error)
        })
    }
})
</script>
