import React from "react";
import axios from 'axios'
import { Link, Route } from "react-router-dom";
import store from "../store"
import { connect } from "react-redux";

const Users = props => {
  let searchVal = "";
  function handleChange(evt) {
    searchVal = evt.target.value;
  }
    return (<div>
    <form
        action=""
        onSubmit={evt => {
          evt.preventDefault();
          props.history.push(`/users/${searchVal}`);
        }}
      >
        <h2>Search for Users</h2> 
        <input
          type="text"
          name="search"
          onChange={evt => {
            handleChange(evt);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
)};

// const mapStateToProps = ({ auth }) => ({
//   isLoggedIn: auth.isLoggedIn
// })



// export default connect(mapStateToProps)(Footer)