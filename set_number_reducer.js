import { INCREASE_PACK_COUNT } from './actions';
import merge from 'lodash/merge';

const setNumberReducer = (state = 0, action) => {
  Object.freeze(state);
  let newState = state;
  switch(action.type) {
    case INCREASE_PACK_COUNT:
      if (state.setNumber === 4) {
        newState = 0;
      }
      newState += 1;
      return newState;
    default:
      return state;
  }
};

export default setNumberReducer;
