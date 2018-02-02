import axios from 'axios';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_ERROR_TEST = 'FETCH_ERROR_TEST';
export const CHECK_RECIPES_DATA = 'CHECK_RECIPES_DATA';
export const CURRENT_SEARCH_TERM = 'CURRENT_SEARCH_TERM';
export const SHOW_CLICKED_INFO = 'SHOW_CLICKED_INFO';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const SHOW_HIDE_FAVORITES = 'SHOW_HIDE_FAVORITES';
export const WAKE_HEROKU = 'WAKE_HEROKU';
export const MANUAL_INGREDIENT_SELECTION = 'MANUAL_INGREDIENT_SELECTION';
export const LOADING_FAVORITES = 'LOADING_FAVORITES';
export const LOAD_RECIPES = 'LOAD_RECIPES';
export const INJECT_TO_FAVORITES = 'INJECT_TO_FAVORITES';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';

const myProxyServer = 'https://elminster-white-cors-anywhere.herokuapp.com/';
const appID = 'a7f201cb';
const appKey = 'a1c054c16e7240f958694b6f821336aa';

export function wakeUpHerokuServerFromSleep() {
  const url = `${myProxyServer}http://www.google.com`;
  const request = axios.get(url);
  return dispatch => {
    request.then(() => {
      dispatch({ type: WAKE_HEROKU });
    });
  };
}

export function fetchRecipesAndPage(ingredients, page) {
  const url = `${myProxyServer}https://api.edamam.com/search?q=${ingredients}
  &app_id=${appID}&app_key=${appKey}&from=${page}&to=${page + 99}`;
  const request = axios.get(url);
  return dispatch => {
    request
      .then(({ data }) => {
        dispatch({ type: FETCH_RECIPES, payload: data });
        dispatch({ type: CHECK_RECIPES_DATA, payload: data });
        dispatch({ type: CURRENT_SEARCH_TERM, payload: ingredients });
        dispatch({ type: FETCH_ERROR_TEST, payload: null });
        dispatch({ type: MANUAL_INGREDIENT_SELECTION, payload: false });
      })
      .catch(error => {
        dispatch({ type: CURRENT_SEARCH_TERM, payload: ingredients });
        dispatch({ type: FETCH_ERROR_TEST, payload: error });
        dispatch({ type: MANUAL_INGREDIENT_SELECTION, payload: false });
      });
  };
}

export function loadRecipes(page) {
  return {
    type: LOAD_RECIPES,
    payload: page,
  };
}

export function selectIngredient(oneIngredient) {
  return dispatch => {
    dispatch(fetchRecipesAndPage(oneIngredient, 1));
    dispatch(showClickedInfo(oneIngredient));
    dispatch({ type: MANUAL_INGREDIENT_SELECTION, payload: true });
  };
}

export function showClickedInfo(info) {
  return {
    type: SHOW_CLICKED_INFO,
    payload: info,
  };
}

export function addToFavorites(fav) {
  return {
    type: ADD_TO_FAVORITES,
    payload: fav,
  };
}

export function showHideFavorites() {
  return {
    type: SHOW_HIDE_FAVORITES,
  };
}

export function loadingFavoritesStart() {
  return {
    type: LOADING_FAVORITES,
    payload: true,
  };
}

export function loadingFavoritesEnd() {
  return {
    type: LOADING_FAVORITES,
    payload: false,
  };
}

export function launchLoadingFavorites() {
  return dispatch => {
    dispatch(loadingFavoritesStart());
    dispatch(loadingFavoritesEnd());
  };
}

export function addLocalStorageToFavoritesList(data) {
  return {
    type: INJECT_TO_FAVORITES,
    payload: data,
  };
}

export function launchClearingFavorites() {
  return {
    type: CLEAR_FAVORITES,
  };
}
