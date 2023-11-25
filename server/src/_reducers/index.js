import { combineReducers } from 'redux';
import user from '../../../src/_reducers/user_reducer';

const rootReducer = combineReducers({
    user,
});

export default rootReducer;