import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import store from '../store'
import {setPublicUser} from '../store/actions/users'



export default(props) => {
    let clickHandler = (user) => {
        console.log(user);
        axios
        .get(`/favorites/getFavorites/${user._id}`)
        .then(res => {
            console.log(res.data)
            return res.data;
        })
        .then(userWithFavs => {
          store.dispatch(setPublicUser(userWithFavs))
          console.log(userWithFavs)
          props.history.push(`/userPublic/${user._id}`)
        });
    }

    return (
    <div>
        {console.log(props)}
       <h1>Users Search: {props.search}</h1>
       {props.users.map((user)=>{
           {console.log(user)}
           return <h2 key={user._id} onClick={()=>clickHandler(user)}>{user.name}</h2>
       })}
    </div>
)}