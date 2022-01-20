<template>
  <div>
    <h4>{{ stock.idxNm }} ({{ stock.basIdx }})</h4>
    <h5>{{ stock.basDt }}</h5>
    <h4>{{ stock.clpr }} ({{ stock.vs }}, {{ stock.fltRt}}%) </h4>
  </div>
</template>

<script>
import StockService from '@/services/StockService.js'


export default ({
    data() {
        return {
            stock: null,
            params: {
                idxNm: 'IT H/W',
                basDt: 20220119
            }
        }
    },
    created() {
        StockService.getMarketIndex(this.params)
        .then(response => {
            console.log(response.data);
            this.stock = response.data.response.body.items.item[0];
        })
        .catch(error => {
        console.log(error)
        })
    }
})
</script>
