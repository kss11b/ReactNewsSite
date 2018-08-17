import { GET_SCIENCE_ARTICLES_SUCCESS } from "../actions/index.js";

const scienceArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SCIENCE_ARTICLES_SUCCESS:
    console.log('science action', action.payload)
      return action.payload.articles;
    default:
      return state;
  }
};

export default scienceArticlesReducer;
