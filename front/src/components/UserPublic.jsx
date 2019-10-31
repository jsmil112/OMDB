import React from 'react';
import { connect } from "react-redux";
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import store from '../store'

const UserPublic = (props) => (
    <div>
        {console.log(store.getState())}
        {console.log("Enter UserPublic")}
        {console.log(props)}
       <h1>User Public Page: {props.publicUser.name}</h1>
       {props.publicUser.favMovies.map((film)=>{return(
            <div key = {film.imdbID}>
                <Link to={`/movies/${film.imdbID}`}>
                    <h3>{film.Title}</h3>
                    <img src={film.Poster} alt=""/>
                    <h4>Year: {film.Year}</h4>
                </Link>
            </div>)
        })}
    </div>
)

const mapStateToProps = ({ users }) => ({
  publicUser: users.publicUser,
});

export default connect(
  mapStateToProps
)(UserPublic);