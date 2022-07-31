// src/modules/counter.js

// Action Value

// Action Creator

// Initial State

// Reducer

// export default reducer

const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

let nextId = 1; // todo 데이터에서 사용 할 고유 id

export const addTodo = (title, content) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    title,
    content,
    isDone: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});


// 초기 상태값
const initialState = {
  todo_1: [],

};



// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const addState = { ...state, todo_1: [...state.todo_1, action.todo] };
      return addState;

    case DELETE_TODO:
      const deleteFilter = { ...state, todo_1: state.todo_1.filter(todo => todo.id !== action.id)}
      return deleteFilter;
    case TOGGLE_TODO:
      const toggleState = { ...state, todo_1: state.todo_1.map(todo => todo.id === action.id ? { ...todo, isDone: !todo.isDone} : todo)}
      return toggleState;
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
