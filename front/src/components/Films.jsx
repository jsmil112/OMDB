import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

const addFilmToFavorites = function(film) {
    console.log("ENTER ADD FILM FUNCTION")
    console.log(film)
    axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${film.imdbID}`)
    .then(res => res.data)
    .then(fullDataFilm => {
        console.log(fullDataFilm)
        axios.post("/favorites/addFilm", {fullDataFilm}).then(res => {
            console.log("ADDEDFILMTOFAVORITES")
            console.log(res);
            console.log(res.data);
        })
    });
}

export default(props) => (
    <div>
        {/* {console.log(props.films)} */}
        {console.log("USER!!!!!!!")}
        {console.log(props.user)}
        {console.log(Object.keys(props.user) > 0 )}
        <h1>Search: {props.search}</h1>
        <hr/>
        {props.films.map((film)=>{return(
            <div key = {film.imdbID}>
                <Link to={`/movies/${film.imdbID}`}>
                    <h3>{film.Title}</h3>
                    <img src={film.Poster} alt=""/>
                    <h4>Year: {film.Year}</h4>
                </Link>
                {Object.keys(props.user).length > 0 ? <h3 onClick = {()=> addFilmToFavorites(film)} >Add to favorites</h3> : ""}
            </div>)
        })}
    </div>
)