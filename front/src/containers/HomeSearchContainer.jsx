import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import HomeSearch from "../components/HomeSearch";

const mapStateToProps = ({ auth }) => ({
  currentUser: auth.currentUser,
  isValidUser: auth.isValidUser
});

export default connect(
  mapStateToProps
)(HomeSearch);
