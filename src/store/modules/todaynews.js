/* 
  這邊可以改為用 types 物件取代 matutions_type.js (繼續用也可以)
  然後在前面加上模組名稱作為前綴，用來避免與其他模組重複。
  因為 action、mutation、和 getter 依然是註冊在全域的命名空間
*/
import * as types from '../mutations_type.js'
// 引入 axios
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const SERVER_URL = 'http://192.168.1.249/ORing_server/api/router.php'


// count state 必須是 Object
const state = {
  news:[
    {
      date:"",
      sender:"",
      message:""
    }
  ],
  new:{
    date:"",
    sender:"",
    message:""
  }
}


const getters = {
  getTodayNews: state => state.news,
 
}

// actions 也是以 Object 形式建構。
const actions = {
  actionGetnews ({ commit }){
    axios
        .post(SERVER_URL,
          {
            action:"TODAY_NEWS_DATA"
          }
        )
        .then(function (response) {
          commit(types.GET_NEWS,response.data);
        })
        .catch(function (error) {
          alert(error);
        })
  }
}

// mutations
const mutations = {
  [types.GET_NEWS] (state, newsData) {
    state.news = newsData;
  }
}

/*
  因為我們把 vuex 所有職權都寫在同一隻檔案，
  所以必須要 export 出去給最外層 index.js 組合使用
*/
export default {
  state,
  getters,
  actions,
  mutations
}