import { createStore, applyMiddleware} from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk'
//import composeEnhancers


// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  reducers,
  // composeWithDevTools()
  applyMiddleware(reduxThunk)
  // composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;