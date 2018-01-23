import { SHOW_CLICKED_INFO } from '../actions';

export default function(state = '', action) {
  switch (action.type) {
    case SHOW_CLICKED_INFO:
      return action.payload;
    default:
      return state;
  }
}
