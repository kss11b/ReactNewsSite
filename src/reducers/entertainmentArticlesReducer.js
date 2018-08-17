import { GET_ENTERTAINMENT_ARTICLES_SUCCESS } from "../actions/index.js";

const entertainmentArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ENTERTAINMENT_ARTICLES_SUCCESS:
    console.log('entertainment action', action.payload)
      return action.payload.articles;
    default:
      return state;
  }
};

export default entertainmentArticlesReducer;
