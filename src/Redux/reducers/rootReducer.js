import { combineReducers } from 'redux';
import favouritesReducer from './favouritesReducer';

const rootReducer = combineReducers({
  favs: favouritesReducer,
});

export default rootReducer;