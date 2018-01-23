import { MANUAL_INGREDIENT_SELECTION } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case MANUAL_INGREDIENT_SELECTION:
      return action.payload;
    default:
      return state;
  }
}
