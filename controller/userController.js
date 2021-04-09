const express = require('express');
const ConnectionDB = require('./../util/connectionDB');
const UserProfile = require('./../models/userProfile');
const User = require('./../models/user');

const router = express.Router();


router.post("/login", function(req, res, next){
  initializeSessionVariable(req, res);

  let data = {
    userProfile: req.session.userProfile,
  };
  console.log("session initialized with user profile data");
  console.log(data);
  res.render("savedConnections_1", {
    theUser: data.userProfile._user,
    userConnections: data.userProfile._userConnections,
  });
});


router.use("/", function(req, res, next){
  console.log("test /savedConnections");

  if(!req.session.theUser){
    res.render("login");
  }else{

    next();
  }
});


router.post("/rsvp", function(req, res, next){
  let code = req.body.connectionId;

  let rsvp = "";

  if (
    req.body.rsvp.toUpperCase() == "YES" ||
    req.body.rsvp.toUpperCase() == "NO" ||
    req.body.rsvp.toUpperCase() == "MAYBE"
  ) {
    rsvp = req.body.rsvp;
  }

  // try {
    let userProfile = new UserProfile(
      req.session.userProfile._user,
      req.session.userProfile._userConnections
    );
    console.log("adding rsvp, profile before add");
    console.log(userProfile);
    let connectionDB = new ConnectionDB();
    let connection = connectionDB.getConnection(code);
    userProfile.addConnection(connection, rsvp);
    console.log("adding rsvp, profile after add");
    console.log(userProfile);

    req.session.userProfile = userProfile;
    res.render("savedConnections_1", {
      theUser: req.session.userProfile._user,
      userConnections: req.session.userProfile._userConnections,
    });
});



router.post("/delete", function(req, res, next){
  let code = req.body.connectionId;
  if (req.session.theUser) {
      let userProfile = new UserProfile(
        req.session.userProfile._user,
        req.session.userProfile._userConnections
      );
      let connection = new ConnectionDB().getConnection(code);
      userProfile.removeConnection(connection);
      req.session.userProfile = userProfile;
      res.render("savedConnections_1", {
        theUser: req.session.userProfile._user,
        userConnections: req.session.userProfile._userConnections,
      });
  }else{
    initializeSessionVariable(req, res);
  }
});

function initializeSessionVariable(req, res){
  let user = new User("person@uncc.edu", "Some", "Person");
  req.session.theUser = user;
  req.session.userProfile = new UserProfile(user, []);
}


router.get('/', function (req, res) {
  res.render("savedConnections_1", {
    theUser: req.session.userProfile._user,
    userConnections: req.session.userProfile._userConnections,
  });
});

router.get('/logout', function (req, res) {
  console.log("logging out user");
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
