import React from "react";
import axios from 'axios'
import store from '../store'
import { Link, Route, Redirect } from "react-router-dom";
import { setLogin } from "../store/actions/auth";

export default class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      showRegister: false
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  onLogin(evt) {
    if(evt) evt.preventDefault();
     axios.post('/auth/login', {email: this.state.email, password: this.state.password}).then(res => {
      store.dispatch(setLogin())
      this.props.history.push(`/user/${res.data._id}`)
     })
  }


  onRegister(evt){
    evt.preventDefault();
    axios.post('/auth/register', {name: this.state.name, email: this.state.email, password: this.state.password}).then(res => {
      //console.log("RESDATA!!!!!!!!")
     // console.log(res.data)
      this.onLogin()
    })

  }

  changeHandler(evt){
    evt.preventDefault();
    if(evt.target.name === 'password'){
      this.setState({
        password: evt.target.value
      })
    }
    else if(evt.target.name === 'email'){
      this.setState({
        email: evt.target.value
      })
    }
    else {
      this.setState({
        name: evt.target.value
      })
    }
  }

  render() {
    return(  <div>
      <h1>{this.state.showRegister ? "Register" : "Login"}</h1>
      <hr/>
      
          {this.state.showRegister ?
          (<div>
            <form>
            <label>Name:</label><input type="text" name="name" value={this.state.name} onChange={(evt)=>this.changeHandler(evt)}/>
            <label>Email:</label><input type="text" name="email" value={this.state.email} onChange={(evt)=>this.changeHandler(evt)}/>
          <label>Password:</label><input type="text" name="password" value={this.state.password} onChange={(evt)=>this.changeHandler(evt)}/>
          <button onClick={(evt)=> this.onRegister(evt)}>Register</button>
          </form>
          <br/>
          <button onClick={()=> this.setState({showRegister: false})}>Click to Login</button>
          </div>
          ) : 
          (
            <div>
            <form>
            <label>Email:</label><input type="text" name="email" value={this.state.email} onChange={(evt)=>this.changeHandler(evt)}/>
          <label>Password:</label><input type="text" name="password" value={this.state.password} onChange={(evt)=>this.changeHandler(evt)}/>
          <button onClick={(evt)=> this.onLogin(evt)}>Login</button></form>
          <br/>
          <button onClick={()=> this.setState({showRegister: true})}>Click to Register</button>
          </div>
          ) 
          }
        
     
  </div>)
  }
}

