const express =require('express');
const router = express.Router();
const passport = require("passport");
const User = require('../models/User');

router.post("/login", passport.authenticate("local"), function(req,res){
    console.log("Successful Login!")
    res.status(201).send(req.user)
})

router.get("/logout", function(req,res){
    console.log("logoutUser1", req.user)
    req.logout();
    console.log("logoutUser2", req.user)
    console.log("LoggedOut");
    res.sendStatus(202);
    //res.redirect("../public/")
})

router.post("/register", function(req,res){
   // console.log("BODY")
   // console.log(req.body)
    User.create(req.body).then((user)=>{  //try using req.logIn(user function(err){})  (Passport)
       // console.log(user);
        //console.log("HOLA")
        console.log("New User created")
        res.status(201).send(user)
    })
})

router.get("/getUser", function(req,res){
    console.log("GETUSER!!!!!!")
    if(req.user) {
        console.log(req.user)
        //console.log(req.user)
        res.send(req.user)
    }
    else res.send({});
})

router.get("/validate", function(req,res){
    if(req.isAuthenticated()) {
        res.send(true)
    }
    else res.send(false);
})

module.exports = router;