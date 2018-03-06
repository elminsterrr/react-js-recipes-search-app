import { combineReducers } from 'redux';
import FetchRecipesReducer from './reducer_fetch_recipes';
import CheckRecipesReducer from './reducer_check_recipes';
import ShowClickedInfoReducer from './reducer_show_clicked_info';
import CurrentSearchTermReducer from './reducer_current_search_term';
import FetchErrorReducer from './reducer_fetch_error';
import ManualIngredientSelectionReducer from './reducer_manual_ingredient_selection';
import ModifyFavoritesListReducer from './reducer_modify_favorites_list';
import HerokuUpReducer from './reducer_wake_heroku';
import LoadRecipesReducer from './reducer_load_recipes';
import RevealFavoritesReducer from './reducer_reveal_favorites';
import searchStartedReducer from './reducer_search_started';

const rootReducer = combineReducers({
  isSearchStarted: searchStartedReducer,
  isHerokuUp: HerokuUpReducer,
  error: FetchErrorReducer,
  recipes: FetchRecipesReducer,
  revealFavorites: RevealFavoritesReducer,
  showClickedInfo: ShowClickedInfoReducer,
  currentSearchTerm: CurrentSearchTermReducer,
  manualSelection: ManualIngredientSelectionReducer,
  checkRecipesData: CheckRecipesReducer,
  favoritesList: ModifyFavoritesListReducer,
  loadRecipes: LoadRecipesReducer,
});

export default rootReducer;
