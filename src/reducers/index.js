import {combineReducers} from 'redux';
import todoReducer from './todo-reducer';
import userReducer from './user-reducer';


const reducers = combineReducers({
todoState: todoReducer,
userState: userReducer
})

export default reducers;