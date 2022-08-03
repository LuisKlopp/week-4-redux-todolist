import { configureStore, createSlice } from '@reduxjs/toolkit'





const todos = createSlice ({
  name : 'todos',
  initialState : {
    todo_1: []
  },
  reducers: {
    addTodo: (state, action) => {
      return state;
    },

  }



})


export let { addTodo } = todos.actions;

export default configureStore({
  reducer: {
    todos: todos.reducer,
  },
});
