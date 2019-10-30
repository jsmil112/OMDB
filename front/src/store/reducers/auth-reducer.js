import{IS_LOGGED_IN, IS_LOGGED_OUT, CURRENT_USER, IS_VALID_USER} from '../constants'

const initialState = {
    isLoggedIn : false,
    isLoggedOut : true,
    currentUser : {},
    isValidUser : false
}

export default (state = initialState, action) => {
    //console.log('HOLA!!!!!!!!!!!')
    const newState = Object.assign({}, state);
    switch(action.type) {
        case IS_LOGGED_IN:
            newState.isLoggedIn = true;
            newState.isLoggedOut = false;
            break;
        case IS_LOGGED_OUT:
            console.log("LOGOUTREDUCER")
            newState.isLoggedOut = true;
            newState.isLoggedIn = false;
            newState.currentUser = {};
            newState.isValidUser = false;
            break;
        case CURRENT_USER:
            console.log("CURRENTUSERREDUCER")
            console.log(action.currentUser)
            newState.currentUser = action.currentUser;
            if(Object.keys(action.currentUser).length > 1) {
                newState.isLoggedIn = true;
                newState.isLoggedOut = false;
            } 
            break;
        case IS_VALID_USER:
            console.log("ISVALIDUSERREDUCER")
            newState.isValidUser = action.isValidUser;
            break;
        default:
            return state;
    }
    console.log("THENEWSTATE")
    console.log(newState);
    return newState;
}