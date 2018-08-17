import { GET_POLITICAL_ARTICLES_SUCCESS } from "../actions/index.js";

const politicalArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POLITICAL_ARTICLES_SUCCESS:
    console.log('political action', action.payload)
      return action.payload.articles;
    default:
      return state;
  }
};

export default politicalArticlesReducer;
