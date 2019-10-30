import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import User from "../components/User";

const mapStateToProps = ({ auth, favorites }) => ({
  currentUser: auth.currentUser,
  isValidUser: auth.isValidUser,
  favMovies: favorites.favMovies
});

export default connect(
  mapStateToProps
)(User);