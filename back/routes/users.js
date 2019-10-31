const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get("/:searchName", function(req, res){
    let query = {};
    query['name'] = req.params.searchName
    console.log("SEARCHNAME!!!!!!!!!!!!!!!!!!")
    console.log(req.params.searchName)
    User.find(query, function(err, users) {         //{name: /${req.params.searchName}/i}
        console.log("RESULTOFSEARCHNAME")
        console.log(users);
        res.json(users);
    })
})

module.exports = router;