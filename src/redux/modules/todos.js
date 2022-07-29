// src/modules/counter.js


// Action Value

// Action Creator

// Initial State

// Reducer

// export default reducer

const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const GET_TODO = 'todos/GET_TODO';


let nextId = 1; // todo 데이터에서 사용 할 고유 id
export const addTodo = (title, content) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    title,
    content,
  }
});


// 초기 상태값
const initialState = [
]

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    default:
      return state;
  }
}

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;