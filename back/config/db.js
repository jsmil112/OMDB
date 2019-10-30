const mongoose = require('mongoose');

const connectDb = () => {
    return mongoose.connect("mongodb://localhost/OMDB", {useNewUrlParser: true});
}

module.exports = {connectDb};