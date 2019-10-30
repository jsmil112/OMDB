import { combineReducers } from 'redux';
import authReducer from './auth-reducer'
import favoriteReducer from './favorites-reducer'

export default combineReducers({
    auth: authReducer,
    favorites: favoriteReducer
});