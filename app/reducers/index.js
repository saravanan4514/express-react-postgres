import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import * as reducers from './reducers';


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  settings: reducers.settings,
  getUsers: reducers.getUsers
});

export default rootReducer
