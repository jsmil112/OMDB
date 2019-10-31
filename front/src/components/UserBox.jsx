import React from "react";
import axios from 'axios'
import { Link, Route } from "react-router-dom";
import store from "../store"
import { connect } from "react-redux";
import {setLogout} from "../store/actions/auth"

const UserBox = props => (
    <div id="userBox" className="homepage hp">
    {props.location.pathname === "/auth/loginRegister" ? "" : (<div> 
      {props.isLoggedIn ? (
        <div class="flexColumn">
          <Link className="userName" to={`/user/${props.currentUser._id}`}> {props.currentUser.name}</Link>
        <button onClick={logoutClick}>Logout</button>
        <button onClick={()=>props.history.push('/userSearch')}>Search Users</button></div>
    ) : (
      <Link to="/auth/loginRegister">Login / Register</Link>
    )}
    </div>)
    }
    </div>
);

const logoutClick = () => {
  axios.get('/auth/logout').then(()=>{
    console.log("HOla")
    store.dispatch(setLogout());
  })
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  currentUser: auth.currentUser
})



export default connect(mapStateToProps)(UserBox)