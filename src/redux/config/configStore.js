import { createStore } from "redux";
import { combineReducers } from "redux";

import counter from "../modules/counter";
import todo from "../modules/todos";

const rootReducer = combineReducers({
  todo: todo,
});
const store = createStore(rootReducer);

export default store;