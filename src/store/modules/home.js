/* 
  這邊可以改為用 types 物件取代 matutions_type.js (繼續用也可以)
  然後在前面加上模組名稱作為前綴，用來避免與其他模組重複。
  因為 action、mutation、和 getter 依然是註冊在全域的命名空間
*/
// import * as types from '../mutations_type.js'
// 引入 axios
// import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

// const SERVER_URL = 'http://192.168.1.249/Oring_Attendance/ajaxTest.php'


// count state 必須是 Object
const state = {
  lineData:{
    columns: ['date', 'LoRa', 'NBiot'],
    rows: [
      { 'date': '01/01', 'LoRa': 15, 'NBiot': 12 },
      { 'date': '01/02', 'LoRa': 12, 'NBiot': 25 },
      { 'date': '01/03', 'LoRa': 21, 'NBiot': 10 },
      { 'date': '01/04', 'LoRa': 41, 'NBiot': 32 },
      { 'date': '01/05', 'LoRa': 31, 'NBiot': 30 },
      { 'date': '01/06', 'LoRa': 71, 'NBiot': 55 },
      { 'date': '01/07', 'LoRa': 61, 'NBiot': 25 },
      { 'date': '01/08', 'LoRa': 51, 'NBiot': 35 },
      { 'date': '01/09', 'LoRa': 81, 'NBiot': 55 },
      { 'date': '01/10', 'LoRa': 91, 'NBiot': 45 },
      { 'date': '01/11', 'LoRa': 41, 'NBiot': 65 },
      { 'date': '01/12', 'LoRa': 51, 'NBiot': 85 }
    ]
  },
  pieDAta:{
    columns: ['status', 'profit'],
    rows: [
      { 'status': 'LoRa_Online', 'amount': 80, 'profit': 0.4},
      { 'status': 'LoRa_Offline', 'amount': 60, 'profit': 0.3},
      { 'status': 'LoRa_Disconnect', 'amount': 60, 'profit': 0.3},
      { 'status': 'NBiot_Online', 'amount': 100, 'profit': 0.5 },
      { 'status': 'NBiot_Offline', 'amount': 50, 'profit': 0.25 },
      { 'status': 'NBiot_Disconnect', 'amount': 50, 'profit': 0.25 }
    ]
  },
  lineColor:['#00469a','#ff0000', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
}

// getters 也可以整理到這邊直接返回 count 內容
const getters = {
  getLineData: state => state.lineData,
  getPieData: state => state.pieDAta,
  getLineColor: state => state.lineColor,
}

// actions 也是以 Object 形式建構。
const actions = {
}

// mutations
const mutations = {
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