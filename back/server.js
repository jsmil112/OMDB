const express = require('express');
const logger = require('morgan');
const path = require('path')
const bodyParser = require('body-parser');
app = express();
const session = require("express-session");
const passport = require("passport");
const User = require('./models/User')
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const {connectDb} = require('./config/db');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const favoriteRouter = require('./routes/favorites');

app.set("view engine", "html");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({ secret: "yo!" }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy({ usernameField: "email" }, function(
      email,
      password,
      done
    ) {
      console.log("enter");
      User.findOne({ 'email': email }, function(err, user) {
          if(err) return done(err)
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.validatePassword(password)) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
      });
    })
  );
  
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
  });
  
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/favorites', favoriteRouter);

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

connectDb().then(async () => {
    app.listen(8080, () =>
      console.log(`Listening on port 8080!`),
    );
});