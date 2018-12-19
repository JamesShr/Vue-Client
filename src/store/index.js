import Vue from 'vue'
import Vuex from 'vuex'
// import { state, mutations } from './mutations.js'
import * as getters from './getter.js'
// import * as actions from './action.js'
import count from './modules/count';
import todo from './modules/todo';
import list from './modules/list';
import home from './modules/home';
// import todo from './modules/todo';

Vue.use( Vuex );


export default new Vuex.Store({
  // root
  getters,
  // 將整理好的 modules 放到 vuex 中組合
  modules: {
    list,
    count,
    todo,
    home
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});
