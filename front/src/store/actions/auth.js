import axios from 'axios';
import{IS_LOGGED_IN, IS_LOGGED_OUT, CURRENT_USER, IS_VALID_USER} from '../constants'

const login = () => ({
    type: IS_LOGGED_IN
})

const logout = () => ({
    type: IS_LOGGED_OUT
})

const currentUser = (user) => ({
    type: CURRENT_USER,
    currentUser: user
})

const isValidUser = (isValid) => ({
    type: IS_VALID_USER,
    isValidUser: isValid
})

export const setLogin = () => dispatch => 
    dispatch(login());

export const setLogout = () => dispatch => 
    dispatch(logout());

export const setCurrentUser = () => dispatch => 
    axios.get("/auth/getUser").then(res=> res.data).then(user=> dispatch(currentUser(user)))

export const validateUser = () => dispatch => 
    axios.get("/auth/validate").then(res=> res.data).then(isValid => dispatch(isValidUser(isValid)))