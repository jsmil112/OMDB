const express = require('express');
const router = express.Router();
//const passport = require("passport");
const User = require('../models/User');

router.get("/:searchName", function(req, res){
   // let query = {};
    //query[name] = req.params.searchName
    User.find(`/${req.params.searchName}/`, function(err, users) {

    })
})

module.exports = router;