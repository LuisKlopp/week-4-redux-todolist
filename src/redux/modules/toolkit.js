import { configureStore, createSlice } from '@reduxjs/toolkit'





let todos = createSlice ({
  name : 'todos',
  initialState : {
    todo_1: []
  },
  reducers: {
    CREATE: (state, action) => {
      let newState = [...state]
      newState.push(action.payload);
      return newState;
    },

  }

  // 그냥 날이 좋길래


})


export default todos