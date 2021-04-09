const express = require("express");
const ConnectionDB = require('../util/connectionDB');
const router = express.Router();


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
      theUser: req.session.theUser,
    });
  }else{
    res.render("about", {title: "About"});
  }
});

router.get('/contact', function (req, res) {
  if(req.session.userProfile){
    res.render("contact", {
      title: "Contact",
      theUser: req.session.theUser,
    });
  }else{
    res.render("contact", {title: "Contact"});
  }
});



router.all("/connection/:connectionId", function(req, res, next){
  const connectionDB = new ConnectionDB();
  console.log("in connection route");
  var connection_data = connectionDB.getConnection(req.params.connectionId);
  console.log(connection_data);

  if(req.session.userProfile){
    res.render("connection", {
      data: connection_data,
      theUser: req.session.theUser
    });
  }else{
    res.render("connection", {data: connection_data});
  }
});

router.all("/connections", function(req, res, next){
  console.log("no valid connection id with request");
  let status = null;
  const connectionDB = new ConnectionDB();
  let topics = connectionDB.getTopics();

  let connections = connectionDB.getConnections();

  console.log("Topics and connections from DB");
  console.log(connections);
  console.log(topics);

  let data = {
    topics: topics,
    connections: connections,
    status: status,
  };

  if (req.session.userProfile){
    res.render("connections", {
      data: data,
      theUser: req.session.theUser,
    });
  }else{
    res.render("connections", {data: data});
  }
});

function validatedConnectionId(connectionId){
  if(connectionId !== undefined){
    if(Number.isInteger(Number.parseInt(connectionId))){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

module.exports = router;
