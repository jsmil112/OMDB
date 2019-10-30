const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favMovieSchema = new Schema({
    Title: String,
    Year: String,
    Actors: String,
    Director: String,
    Writer: String,
    Genre: String,
    Rated: String,
    Runtime: String,
    Released: String,
    Plot: String,
    Poster: String
})

const FavMovie = mongoose.model("FavMovie", favMovieSchema)

module.exports = FavMovie;