import React from "react";
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import store from '../store'
import {fetchFavoriteMovies} from '../store/actions/favorites'

let removeFilmFromFavorites = function(filmId) {
  axios.post("/favorites/removeFilm", {filmId: filmId}).then(res => {
    store.dispatch(fetchFavoriteMovies())
  })
}

export default props => (
  <div>
    {console.log(props.currentUser)}
      <h1>{props.currentUser.name}</h1>
      <hr/>
      {/* <button onClick={}>Logout</button> */}
      <h3>Favorites:</h3>
      {/* {console.log("PROPSFAVMOVIES")} */}
        {/* {console.log(props.favMovies)} */}
      {props.favMovies.map((film)=>{
       return (<div key = {film._id}>
                <Link to={`/movies/${film.imdbID}`}>
                    <h3>{film.Title}</h3>
                    <img src={film.Poster} alt=""/>
                    <h4>Year: {film.Year}</h4>
                </Link>
                <h3 onClick = {()=> removeFilmFromFavorites(film._id)} >Remove from favorites</h3>
        </div>)
      })}

  </div>
);