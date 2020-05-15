require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const helmet = require('helmet');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./config/keys');
const User = require('./models/user.model');

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

//Google Strategy
passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    //check if user exists in db 
    User.findOne({googleID: profile.id}).then((currentUser) => {
        if(currentUser) {
            //already have the user 
            console.log('user is:', currentUser);
            done(null, currentUser)
        } else {
            //if not, create user in our db 
            new User({
                username: profile.displayName,
                googleID: profile.id
            }).save().then((newUser) => {
                console.log('new user created' + newUser);
                done(null, newUser);
            });
        }
    });
}))

//code to serialize & deserialize the user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

//auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('http://localhost:3000/blogs');
});

//routes for the blogs 
const blogsRouter = require('./routes/blogs');
app.use('/blogs', blogsRouter);

//local users routes 
const Users = require('./routes/Users');
app.use('/users', Users)

//connect to database
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Çonnected to MongoDB'))
    .catch(err => console.log(err));

    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
      
        app.get("*", (req, res) => {
          res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
        });
      }

//port setup
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
