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
import UserBox from "./UserBox"
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
    {props.location.pathname === "/" && $(".homepage").length === 0 ? $(".hp").addClass("homepage") : ""}
    {props.location.pathname !== "/" && $(".homepage").length > 0 ? $(".hp").removeClass("homepage") : ""}
    store.dispatch(validateUser());
    store.dispatch(setCurrentUser());
  });

  const onUserEnter = () => {
    let { isValidUser } = store.getState();
    if (!isValidUser) <Redirect to="/" />;
    store.dispatch(fetchFavoriteMovies());
  }; 

  return (
    <div id="main">
      <div className="flex hp homepage">
      <div className="flex hp homepage title">
          <Link to="/" style={{textDecoration: 'none', color: 'black'}}><span id="title" className="homepage hp">OMDB</span></Link>
          <Route path="/" component={HomeSearchContainer} />
        </div>
      <UserBox location = {props.location} history = {props.history}/>
      </div>
       
       
        
        
        
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
        
        
    </div>
  );
};