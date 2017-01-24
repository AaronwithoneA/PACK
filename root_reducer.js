import {combineReducers} from 'redux';
import CardsReducer from './cards_reducer';

const rootReducer = combineReducers({
  cards: CardsReducer
});

export default rootReducer;
