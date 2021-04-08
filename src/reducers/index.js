import counterReducer from "./counter";
import newsReducer from "./news";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  news: newsReducer
})

export default rootReducer