import {
  ADD_TO_FAVORITES,
  INJECT_TO_FAVORITES,
  CLEAR_FAVORITES,
} from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case INJECT_TO_FAVORITES:
      return [...state, ...action.payload];
    case CLEAR_FAVORITES:
      return action.payload;
    // That case doesn't modify the existing state, it determines (based on the action type)
    // that the new state should be [] (because action.payload = []). Totally normal and valid in Redux.
    default:
      return state;
  }
}
