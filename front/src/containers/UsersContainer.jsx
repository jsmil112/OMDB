import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Users from "../components/Users"

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  //apikey=20dac387
  componentDidMount() {
      console.log("USERSCONTAINERDIDMOUNT!!!!!!!!!!!!!!!!!!")
      console.log(this.props)
    axios
      .get(`/users/${this.props.searchName}`)
      .then(res => res.data)
      .then(users => {
        console.log(users)
        this.setState({ users: users });
      });
  }

  render() {
    return (<Users history = {this.props.history} users = {this.state.users} search = {this.props.searchName}/>)
  }
}

const mapStateToProps = ({ auth }) => ({
  currentUser: auth.currentUser,
  isValidUser: auth.isValidUser
})

export default connect(mapStateToProps)(UsersContainer);