import {combineReducers} from 'redux';
import CardsReducer from './cards_reducer';
import SetNumberReducer from './set_number_reducer';

const rootReducer = combineReducers({
  cards: CardsReducer,
  setNumber: SetNumberReducer
});

export default rootReducer;
