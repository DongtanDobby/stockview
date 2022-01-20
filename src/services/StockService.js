import axios from 'axios'

const gonggongIndex = axios.create({
    baseURL: process.env.VUE_APP_GONGGONG_URL,
    withCredentials: false,
    headers: {
        'resultType': process.env.VUE_APP_GONGGONG_RESULTTYPE,
        'serviceKey': process.env.VUE_APP_GONGGONG_APIKEY,
    }

})

export default {
    getMarketIndexList() {

        return gonggongIndex.get('/getStockMarketIndex')
    },
    getMarketIndex(params) {

        return gonggongIndex.get('/getStockMarketIndex', { headers: params} )
    }

}