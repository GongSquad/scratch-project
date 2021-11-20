import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk'

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  reducers,
  // composeWithDevTools()
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;