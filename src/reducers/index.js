import { combineReducers } from 'redux';
import FetchRecipesReducer from './reducer_fetch_recipes';
import CheckRecipesReducer from './reducer_check_recipes';
import ShowClickedInfoReducer from './reducer_show_clicked_info';
import CurrentSearchTermReducer from './reducer_current_search_term';
import FetchErrorReducer from './reducer_fetch_error';
import ManualIngredientSelectionReducer from './reducer_manual_ingredient_selection';
import AddToFavoritesReducer from './reducer_add_to_favorites';
import ShowFavoritesReducer from './reducer_show_favorites';
import HerokuUpReducer from './reducer_wake_heroku';

const rootReducer = combineReducers({
  recipes: FetchRecipesReducer,
  showClickedInfo: ShowClickedInfoReducer,
  currentSearchTerm: CurrentSearchTermReducer,
  manualSelection: ManualIngredientSelectionReducer,
  checkRecipesData: CheckRecipesReducer,
  error: FetchErrorReducer,
  favoritesList: AddToFavoritesReducer,
  showFavorites: ShowFavoritesReducer,
  isHerokuUp: HerokuUpReducer,
});

export default rootReducer;
