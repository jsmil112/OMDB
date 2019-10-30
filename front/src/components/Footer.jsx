import React from "react";
import axios from 'axios'
import { Link, Route } from "react-router-dom";
import store from "../store"
import { connect } from "react-redux";
import {setLogout} from "../store/actions/auth"

const Footer = props => (
    <div>
    {console.log("loggedIn", store.getState().auth.isLoggedIn)}
    {props.location.pathname === "/auth/loginRegister" ? "" : (<div><hr/> 
      {props.isLoggedIn ? (
        <div><Link to={`/user/${store.getState().auth.currentUser._id}`}> Your Page </Link>
        <br/>
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
  isLoggedIn: auth.isLoggedIn
})



export default connect(mapStateToProps)(Footer)