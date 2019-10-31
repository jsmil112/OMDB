import React, { useEffect } from "react";
import HomeSearch from "./HomeSearch";
import HomeSearchContainer from "../containers/HomeSearchContainer";
import FilmsContainer from "../containers/FilmsContainer";
import FilmContainer from "../containers/FilmContainer";
import LoginRegister from "../components/LoginRegister";
import UsersContainer from "../containers/UsersContainer";
import UserContainer from "../containers/UserContainer";
import UserSearch from "../components/UserSearch"
import UserPublic from "../components/UserPublic"
import Footer from "./Footer"
import { Route, Redirect, Switch, Link } from "react-router-dom";
import RouteHook from "react-route-hook";
import store from "../store";
import { fetchFavoriteMovies } from "../store/actions/favorites";
import {
  setLogin,
  setLogout,
  setCurrentUser,
  validateUser
} from "../store/actions/auth";

export default (props) => {

  useEffect(() => {
    store.dispatch(validateUser());
    store.dispatch(setCurrentUser());
  });

  const onUserEnter = () => {
    let { isValidUser } = store.getState();
    if (!isValidUser) <Redirect to="/" />;
    store.dispatch(fetchFavoriteMovies());
  }; 

  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-10">
        <Link to="/" style={{textDecoration: 'none', color: 'black'}}><h2>OMDB</h2></Link>
        <Route
          exact
          path="/search/:search"
          render={({ match }) => (
            <FilmsContainer search={match.params.search} />
          )}
        />
        <Route
          exact
          path="/movies/:movieId"
          render={({ match }) => (
            <FilmContainer movieId={match.params.movieId} />
          )}
        />
        <RouteHook exact path="/auth/loginRegister" component={LoginRegister}/>
        <RouteHook exact path="/user/:id" component={UserContainer} onEnter={onUserEnter}/>
        <Route exact path="/userSearch" component={UserSearch}/>
        <Route exact path="/userPublic/:id" component={UserPublic}/>
        <Route exact path="/users/:searchName" render={({ match, history }) => (
            <UsersContainer searchName={match.params.searchName} history={history}/>)}/>
        <Route path="/" component={HomeSearchContainer} />
        <Footer location = {props.location} history = {props.history}/>
      </div>
    </div>
  );
};