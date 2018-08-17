import { GET_BUSINESS_ARTICLES_SUCCESS } from "../actions/index.js";

const businessArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BUSINESS_ARTICLES_SUCCESS:
    console.log('business action', action.payload)
      return action.payload.articles;
    default:
      return state;
  }
};

export default businessArticlesReducer;
