var express = require('express');
var router = express.Router();
var connection_database = require('../util/connectionDB');

router.get('/', function (req, res) {
    if(req.session.userProfile){
      res.render("index", {
        title: "Home",
        theUser: req.session.theUser,
      });
    }else{
      res.render("index", {title: "Home"});
    }
});

router.get('/about', function (req, res) {
  if(req.session.userProfile){
    res.render("about", {
      title: "About",
      theUser: req.session.userProfile.user,
    });
  }else{
    res.render("about", {title: "About"});
  }
});

router.get('/contact', function (req, res) {
  if(req.session.userProfile){
    res.render("contact", {
      title: "Contact",
      theUser: req.session.userProfile.user,
    });
  }else{
    res.render("contact", {title: "Contact"});
  }
});

module.exports = router;
