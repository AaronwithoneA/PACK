import { MATCH } from './actions';
import merge from 'lodash/merge';

const setNumberReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case MATCH:
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
