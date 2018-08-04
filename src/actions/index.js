import { RSAA } from 'redux-api-middleware';

export const GET_ITEMS = "GET_ITEMS";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILURE = "GET_ITEMS_FAILURE";

export const GET_TECH_ARTICLES = "GET_TECH_ARTICLES";
export const GET_TECH_ARTICLES_SUCCESS = "GET_TECH_ARTICLES_SUCCESS";
export const GET_TECH_ARTICLES_FAILURE = "GET_TECH_ARTICLES_FAILURE";


export const getItems = () => (
  {
    [RSAA] :
    {
      headers: { 'Content-Type': 'application/json' },
      types: [GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE],
      method: 'GET',
      endpoint: '/api/getArticles',
      // payload: response,
  }
    });

export const getTechArticles = () => {console.log('getTechArticles'); return (
  {
    [RSAA] :
    {
      headers: { 'Content-Type': 'application/json' },
      types: [GET_TECH_ARTICLES, GET_TECH_ARTICLES_SUCCESS, GET_TECH_ARTICLES_FAILURE],
      method: 'GET',
      endpoint: '/api/getTechArticles',
  }
})};
