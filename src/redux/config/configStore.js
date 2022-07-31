import { createStore } from "redux";
import { combineReducers } from "redux";

import todo from "../modules/todos";

const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer);

export default store;