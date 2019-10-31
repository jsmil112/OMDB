import React from "react";
import { Link, Route } from "react-router-dom";

export default props => {
  let searchVal = "";
  function handleChange(evt) {
    //console.log(evt.target.value)
    searchVal = evt.target.value;
  }
  return (
    <div id="homeSearch" className="homepage hp">
      <form
        action=""
        onSubmit={evt => {
          evt.preventDefault();
          //console.log(evt)
          props.history.push(`/search/${searchVal}`);
        }}
      >
        
        {/* {Object.keys(props.currentUser).length > 0 ? <span>{props.currentUser.name}</span> : ""} */}
        <input
          type="text"
          name="search"
          onChange={evt => {
            handleChange(evt);
          }}
        />
        <input type="submit" value="Search Films" />
      </form>

      {/* <hr /> */}
      {/* {console.log(props.currentUser)}
      {console.log(Object.keys(props.currentUser).length)}
      {Object.keys(props.currentUser).length === 0 ? 
      (<Link to="/auth/loginRegister">Login / Register</Link>) :
      (<Link to={`/user/${props.currentUser._id}`}> Your Page </Link>)
      } */}
    </div>
  );
};
