const express =require('express');
const router = express.Router();
const FavMovie = require('../models/FavMovie')
const User = require('../models/User')

router.post('/addFilm', function(req, res) {
    console.log("FAV Post BOdy")
    console.log(req.body.fullDataFilm)
    
    FavMovie.create(req.body.fullDataFilm).then((favMovie)=> {
        console.log("Fav Movie inside Crea", favMovie)
        console.log("Film Added to Favorites");
        console.log(req.user)
        //User.findOneAndUpdate({})


        req.user.favMovies.push(favMovie._id);
        req.user.save();
        res.status(201).json(favMovie);
        
    })
})

router.post('/removeFilm', function(req, res) {
    console.log("Removing Post")
    let filmIndex = req.user.favMovies.indexOf(req.body.filmId);
    console.log(filmIndex)
    let removedFilm = req.user.favMovies.splice(filmIndex, 1)

    // req.user.favMovies.push(favMovie._id);
     req.user.save();
    res.status(201).json(removedFilm[0]);
})

router.get('/getFavorites', function(req,res) {
    console.log("HEREHRHERHERHERHEHEHREURHUEHRIUEHIRUHEIRUHEIHRUEIRHIEURH")
    User.findOne({_id: req.user._id}).populate('favMovies').exec((err, user)=>{
        console.log('FAVORITE FILMS !@!@!@!@!@!@@')
        //console.log(favMovies)
        res.status(201).send(user.favMovies);
    })
})

/////Refactor this to just one get request that take id in params and returns rather than req.user


//finds user, populates favorites, and then sends it all.
router.get('/getFavorites/:id', function(req,res) {
    User.findOne({_id: req.params.id}).populate('favMovies').exec((err, user)=>{
        console.log('FAVORITE FILMS !@!@!@!@!@!@@')
        console.log(user)
        res.status(201).json(user);
    })
})

module.exports = router;