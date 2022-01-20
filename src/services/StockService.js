import axios from 'axios'

const gonggongIndex = axios.create({
    baseURL: process.env.VUE_APP_GONGGONG_URL,
    withCredentials: true,
    
})

export default {
    getMarketIndexList() {

        return gonggongIndex.get('/getStockMarketIndex')
    },
    getMarketIndex(params) {

        return gonggongIndex.get('/getStockMarketIndex', { headers: params} )
    }

}