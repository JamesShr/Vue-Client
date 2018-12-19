// export const getCount = state => {
//     return{
//       count:state.count.count
//     }
//   }


export const getCountandTodo = state => {
  return {
    count: state.count.count,
    todo: state.todo.todos,
  }
}

// export const getDone = state => {
//   return state.todos.filter((item) => {
//     return item.done;
//   });
// }

// export const getTodo = state => {
//   return state.todos.filter((item)=>{
//     return !item.done;
//   });
// }
