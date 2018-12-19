// import mutations from './mutations'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const actionIncrease = ({ commit }) => {
  // console.log('actionIncrease');
  commit(types.INCREASE);
}

export const actionDecrease = ({ commit }) => {
  // console.log('actionDecrease');
  commit(types.DECREASE);
}

export const addTodo = ({ commit }, newTodo) => {
  // 直接將 newTodo 傳遞給 mutation
  commit(types.ADD_TODO, newTodo);
}

export const toggleTodo = ({ commit }, key) => {
  commit(types.TOGGLE_TODO, key);
}

export const deleteTodo = ({ commit }, key) => {
  commit(types.DELETE_TODO, key);
}

export const updateTodo = ({ commit }, obj) => {
  commit(types.UPDATE_TODO, obj);
}