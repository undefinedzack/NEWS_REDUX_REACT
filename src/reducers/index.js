import newsReducer from "./news";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
  news: newsReducer
})

export default rootReducer