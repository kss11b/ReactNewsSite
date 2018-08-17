import { GET_SPORTS_ARTICLES_SUCCESS } from "../actions/index.js";

const sportsArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SPORTS_ARTICLES_SUCCESS:
    console.log('sports action', action.payload)
      return action.payload.articles;
    default:
      return state;
  }
};

export default sportsArticlesReducer;
