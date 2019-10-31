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
  {console.log("INSIDE USER COMPONENT")}
    {console.log(props.currentUser)}
    {console.log("INSIDE USER COMPONENT")}
      <h1>{props.currentUser.name}</h1>
      {console.log("INSIDE USER COMPONENT")}
      <hr/>
      {/* <button onClick={}>Logout</button> */}
      <h3>Favorites:</h3>
      {console.log("INSIDE USER COMPONENT")}
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