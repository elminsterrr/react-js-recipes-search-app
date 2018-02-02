import { combineReducers } from 'redux';
import FetchRecipesReducer from './reducer_fetch_recipes';
import CheckRecipesReducer from './reducer_check_recipes';
import ShowClickedInfoReducer from './reducer_show_clicked_info';
import CurrentSearchTermReducer from './reducer_current_search_term';
import FetchErrorReducer from './reducer_fetch_error';
import ManualIngredientSelectionReducer from './reducer_manual_ingredient_selection';
import ModifyFavoritesListReducer from './reducer_modify_favorites_list';
import ShowFavoritesReducer from './reducer_show_favorites';
import HerokuUpReducer from './reducer_wake_heroku';
import LoadingFavoritesReducer from './reducer_loading_favorites';
import LoadRecipesReducer from './reducer_load_recipes';

const rootReducer = combineReducers({
  recipes: FetchRecipesReducer,
  showClickedInfo: ShowClickedInfoReducer,
  currentSearchTerm: CurrentSearchTermReducer,
  manualSelection: ManualIngredientSelectionReducer,
  checkRecipesData: CheckRecipesReducer,
  error: FetchErrorReducer,
  favoritesList: ModifyFavoritesListReducer,
  showFavorites: ShowFavoritesReducer,
  isHerokuUp: HerokuUpReducer,
  loadingFavorites: LoadingFavoritesReducer,
  loadRecipes: LoadRecipesReducer,
});

export default rootReducer;
