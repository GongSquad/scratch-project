import { combineReducers } from 'redux';

// import all reducers here
import entryReducer from './entryReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  entry: entryReducer,
});

// make the combined reducers available for import
export default reducers;