import { combineReducers } from 'redux';

import FirebaseReducer from './Firebase/reducer_firebase.js';

const rootReducer = combineReducers({
  worksList : FirebaseReducer
});

export default rootReducer;
