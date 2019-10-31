import { combineReducers } from 'redux';
import authReducer from './auth-reducer'
import favoriteReducer from './favorites-reducer'
import usersReducer from './users-reducer'

export default combineReducers({
    auth: authReducer,
    favorites: favoriteReducer,
    users: usersReducer
});