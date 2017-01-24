import { RECEIVE_CARD, RECEIVE_CARDS, REMOVE_CARD } from './actions';
import merge from 'lodash/merge';

const cardReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CARD:
      return merge({}, state, action.card);
    case RECEIVE_CARDS:
      return action.cards;
    case REMOVE_CARD:
      let newState = merge({}, state);
      delete newState[action.card.id];
      return newState;
    default:
      return state;
  }
};

export default cardReducer;
