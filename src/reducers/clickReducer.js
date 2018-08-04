import { GET_ITEMS_SUCCESS } from "../actions/index.js";

const clickReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
    console.log('action', action)
      return action.payload;
    default:
      return state;
  }
};

export default clickReducer;
