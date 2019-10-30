import{FAVORITE_MOVIES} from '../constants'

const initialState = {
    favMovies : []
}

export default (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case FAVORITE_MOVIES:
            console.log("ACTIONSMOVIES!!!!!!!!!!!!")
            console.log(action.movies)
            newState.favMovies = action.movies.slice();
            //console.log(newState.favoriteMovies);
            break;
        default:
            return state;
    }
    console.log("THENEWSTATE")
    console.log(newState);
    return newState;
}