import { GET_TECH_ARTICLES_SUCCESS } from "../actions/index.js";

const techArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TECH_ARTICLES_SUCCESS:
    console.log('tech action', action.payload)
      return action.payload.articles;
    default:
      return state;
  }
};

export default techArticlesReducer;
