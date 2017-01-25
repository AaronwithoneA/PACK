import { RECEIVE_CARD, RESET_CARDS, REMOVE_CARD } from './actions';
import merge from 'lodash/merge';


// const intitialState =
const cardsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = state.slice(0);
  switch(action.type) {
    case RECEIVE_CARD:
      newState.push(action.card);
      return newState;
    case RESET_CARDS:
      return [];
    case REMOVE_CARD:
      newState.forEach((card, i) => {
        if (card === action.card) {
          if (newState[i+1]) {
            newState =  newState.slice(0,i).concat(newState.slice(i+1));
          } else {
            newState = newState.slice(0, i);
          }
        }
      });
      return newState;
    default:
      return state;
  }
};

export default cardsReducer;
