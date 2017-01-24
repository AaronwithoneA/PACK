import { createStore } from 'redux';
import rootReducer from './root_reducer';

const configureStore = () => (
  createStore(
    rootReducer
  )
);

export default configureStore;
