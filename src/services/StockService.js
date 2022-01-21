import axios from 'axios'

const gonggongIndex = axios.create({
    baseURL: process.env.VUE_APP_GONGGONG_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
    
})

export default {
    getMarketIndexList(perPage, pageNo) {
        return gonggongIndex.get('/getStockMarketIndex' + '?numOfRows=' + perPage + '&pageNo=' + pageNo )
    },
    getMarketIndex(idxNm) {
        return gonggongIndex.get('/getStockMarketIndex' + '?idxNm=' + encodeURIComponent(idxNm))
    },
    getMarketIndexPage(perPage, pageNo) {
        return gonggongIndex.get('/getStockMarketIndex', { headers: {'numOfRows': perPage, 'pageNo': pageNo}} )
        //querystring
        // return gonggongIndex.get('/getStockMarketIndex' + '?numOfRows=' + perPage + '&pageNo=' + pageNo )
    }

}