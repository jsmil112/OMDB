import React from "react";
import { Link, Route } from "react-router-dom";

export default props => (
  <div>
    <h1>{props.film.Title}</h1>
    <hr />
      <img src={props.film.Poster} alt="" />
      <h4>Year: {props.film.Year}</h4>
      <h4>Actors: {props.film.Actors}</h4>
      <h4>Director: {props.film.Director}</h4>
      <h4>Genre: {props.film.Genre}</h4>
      <h4>Rated: {props.film.Rated}</h4>
      <h4>Runtime: {props.film.Runtime}</h4>
      <h4>Released: {props.film.Released}</h4>
      <h5>Plot: {props.film.Plot}</h5>
  </div>
);
