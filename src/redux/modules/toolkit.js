import { configureStore, createSlice } from '@reduxjs/toolkit'





const todos = createSlice ({
  name : 'todos',
  initialState : {
    todo_1: []
  },

  reducers: {
    addTodo: (state, action) => {
      let newState = [...state]
      newState.push(action.payload);
      return newState;
    },

  }

  // 그냥 날이 좋길래


})


export default todos