import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Film from "../components/Film"

export default class FilmsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
    };
  }

  //apikey=20dac387
  componentDidMount() {
      //console.log(this.props.movieId)
    axios
      .get(`https://www.omdbapi.com/?apikey=20dac387&i=${this.props.movieId}`)
      .then(res => res.data)
      .then(film => {
        this.setState({ film: film });
      });
  }

  render() {
    return (<Film film = {this.state.film}/>)
  }
}

// const mapStateToProps = ({ albums }) => ({
//   albums: albums.list,
// })

// export default connect(mapStateToProps)(Albums);
