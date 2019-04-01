import { combineReducers } from 'redux'

import auth from './ducks/auth';
import todos from './ducks/todo';

export default combineReducers({
    auth,
    todos,
})