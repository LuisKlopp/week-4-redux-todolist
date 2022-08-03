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



})


export default todos