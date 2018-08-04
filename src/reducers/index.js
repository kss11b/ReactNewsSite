import { combineReducers } from "redux";
import clickReducer from "./clickReducer";
import techArticlesReducer from "./techArticlesReducer";

export default combineReducers({ 
  items: clickReducer,
  techArticles: techArticlesReducer,
});
