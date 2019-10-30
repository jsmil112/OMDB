import{FAVORITE_MOVIES} from '../constants'
import axios from 'axios'

const favoriteMovies = function(films) {
    return {
        type: FAVORITE_MOVIES,
        movies: films
    }
}

export const fetchFavoriteMovies = () => dispatch => {
    axios.get('/favorites/getFavorites').then((res)=> res.data).then((films)=>{
        console.log("FETCH#$%^&*&^%$#$%^&*&^%$%^&*")
        console.log(films);
        dispatch(favoriteMovies(films))
    });
}


// export const validateUser = () => dispatch => 
//     axios.get("/auth/validate").then(res=> res.data).then(isValid => dispatch(isValidUser(isValid)))