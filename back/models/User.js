const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const userSchema = new Schema({
   name: String,
   email: String,
   password: String,
   salt: String,
   favMovies: [{
       type: Schema.Types.ObjectId, 
       ref: 'FavMovie'}]

})
userSchema.methods.hashPassword = function(password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
}

userSchema.methods.validatePassword = function(password){
    return this.password = this.hashPassword(password);
}

userSchema.pre('save', function(next) {
    //console.log(userSchema);
    if(this.password && this.isModified('password')){
        this.salt = crypto.randomBytes(20).toString('hex');
       // console.log("Pre");
       // console.log(this.salt);
        this.password = this.hashPassword(this.password);
    }
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;