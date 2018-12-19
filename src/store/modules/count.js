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

const SERVER_URL = 'http://192.168.1.249/Oring_Attendance/ajaxTest.php'


// count state 必須是 Object
const state = {
  count:0,
  employees:[
    {
      employee_name:"",
      employee_number:"",
      en_name:"",
      email:""
    }
  ],
  employee:{
    employee_name:"",
    employee_number:"",
    en_name:"",
    email:""
  }
}

// getters 也可以整理到這邊直接返回 count 內容
const getters = {
  getCount: state => state.count,
  getEmployee: state => state.employees,
}

// actions 也是以 Object 形式建構。
const actions = {
  actionGetajax ({ commit }){
    axios
        .post(SERVER_URL,
          {
            action:"EMPLOYEE_DATA"
          }
        )
        .then(function (response) {
          commit(types.COUNT_AJAX,response.data);
        })
        .catch(function (error) {
          alert(error);
        })
  },
  actionSaveData ({ commit },editData){
    //console.log(editData.number+'-'+editData.name+'-'+editData.enname+'-'+editData.email)
    axios
        .post(SERVER_URL,
          {
            action:"EDIT_EMPLOYEE_DATA",
            editData
          }
        )
        .then(function (response) {
     
          response.data.editNum = editData.editNum;
          commit(types.COUNT_EMPLOYEE_EDIT,response.data);
        })
        .catch(function (error) {
          alert(error);
        })
  },
  actionIncrease ({ commit }, num) {
    commit(types.INCREASE, num);
  },
  actionDecrease ({ commit }, num) {
    commit(types.DECREASE, num);
  },
  actionCountReset ({ commit }) {
    commit(types.COUNT_RESET);
  }
}

// mutations
const mutations = {
  [types.COUNT_EMPLOYEE_EDIT] (state, editData) {

    state.employees[editData.editNum].employee_name  = editData.employee_name ;
    state.employees[editData.editNum].en_name  = editData.en_name ;
    state.employees[editData.editNum].email  = editData.email ;
    
  },
  [types.COUNT_AJAX] (state, employeeData) {
    state.employees = employeeData;
  },
  [types.INCREASE] (state, num) {
    state.count += num;
  },
  [types.DECREASE] (state, num) {
    state.count -= num;
  },
  [types.COUNT_RESET] (state) {
    state.count = 0;
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