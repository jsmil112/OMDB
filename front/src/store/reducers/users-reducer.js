import{PUBLIC_USER} from '../constants'

const initialState = {
    publicUser : []
}

export default (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case PUBLIC_USER:
            newState.publicUser = action.publicUser
            break;
        default:
            return state;
    }
    console.log("THENEWSTATE")
    console.log(newState);
    return newState;
}