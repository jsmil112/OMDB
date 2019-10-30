import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Films from "../components/Films"

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  //apikey=20dac387
  componentDidMount() {
    axios
      .get(`/users/${this.props.searchName}`)
      .then(res => res.data)
      .then(users => {
        this.setState({ users: users });
      });
  }

  render() {
    return (<Users users = {this.state.users} search = {this.props.searchName}/>)
  }
}

const mapStateToProps = ({ auth }) => ({
  currentUser: auth.currentUser,
  isValidUser: auth.isValidUser
})

export default connect(mapStateToProps)(FilmsContainer);