const state={
    count:0,
    todos: [
    { id: 1, text: 'this is done 1', done: true },
    { id: 2, text: 'this is false done 2', done: false },
    { id: 3, text: 'this is done 3', done: true },
    { id: 4, text: 'this is done 4', done: true }
  ]
};
const getters={
  doneList:state=>{
    return state.todos.filter(todo=>todo.done)
  },
  count:state=>{
    return state.count;
  }
};
const mutations={
    getState(state,play){
      state.count+=play.count
    },
    increment(state){
      state.count++;
    },
    decrement(state){
    state.count--;
  }
};
const actions={
  getcrement(context,id){
    context.commit('getState',{count:id})
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
