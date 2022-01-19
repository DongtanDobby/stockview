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
          {id: 1,
          basDt: "20220118",
          idxNm: "KRX 100",
          idxCsf: "KRX시리즈",
          epyItmsCnt: "101",
          clpr: "5959.5",
          vs: "-38.9",
          fltRt: "-0.65",
          mkp: "6020.74",
          hipr: "6032.52",
          lopr: "5939.65",
          trqu: "85047817",
          trPrc: "6473637105553",
          lstgMrktTotAmt: "1679922704108410",
          lsYrEdVsFltRg: "-248",
          lsYrEdVsFltRt: "-4",
          yrWRcrdHgst: "6227.25",
          yrWRcrdHgstDt: "20220103",
          yrWRcrdLwst: "5959.5",
          yrWRcrdLwstDt: "20220118",
          basPntm: "20010102",
          basIdx: "1000"
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