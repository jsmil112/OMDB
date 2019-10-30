import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Films from "../components/Films"

class FilmsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
    //console.log(props)
  //  console.log("yooooo");
  }

  //apikey=20dac387
  componentDidMount() {
     // console.log("YPPPPP")
    axios
      .get(`https://www.omdbapi.com/?apikey=20dac387&s=${this.props.search}`)
      .then(res => res.data)
      .then(films => {
       // console.log("FILM!!!!!!!!!!!!!")
        // console.log(films);
         //console.log(films.Search)
        this.setState({ films: films.Search });
        //console.log("FILMS!!!");
        //console.log(this.state.films);
      });
  }

  render() {
    return (<Films films = {this.state.films} search = {this.props.search} user = {this.props.currentUser}/>)
  }
}

const mapStateToProps = ({ auth }) => ({
  currentUser: auth.currentUser,
  isValidUser: auth.isValidUser
})

export default connect(mapStateToProps)(FilmsContainer);