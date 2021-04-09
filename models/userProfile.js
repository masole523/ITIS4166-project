const User = require('./user');
const UserConnection = require('../models/userConnection');
const Connection = require('./connection');

class UserProfile{
  constructor(user, userConnections){
    this._user = user;
    this._userConnections = userConnections;
  }

  getUserID(){
    return this.userID;
  }

  setUserID(userID){
    this.userID = userID;
  }

  getUserConnections(){
    return this.userConnections;
  }

  setUserConnections(userConnections){
    this.userConnections = userConnections;
  }

  addConnection(connection, rsvp){
    var flag = 0;
    console.log("in addConnection");
    console.log(connection);
    console.log(rsvp);

    if(connection instanceof Connection && rsvp != undefined){
      for (let i = 0; i < this._userConnections.length; i++){
        console.log(this._userConnections[i]._connection._connectionId);
        console.log(connection._connectionId);
        if (this._userConnections[i]._connection._connectionId === connection._connectionId){
          this._userConnections[i]._rsvp = rsvp;
          flag = 1;
          break;
        }
      }
      if(flag == 0){
        console.log("adding connection. Updated userconnections array");
        let newUserCon = new UserConnection(connection, rsvp);
        this._userConnections.push(newUserCon);
      }
      console.log(this._userConnections);
    }else{
      throw new Error("connection should be a Connection object");
    }
  }

  removeConnection(connection){
    if(connection instanceof Connection){
      for (let i = 0; i < this._userConnections.length; i++){
        if (this._userConnections[i]._connection._connectionId == connection._connectionId){
          console.log("found connection to delete in profile");
          this._userConnections.splice(i, 1);
          break;
        }
      }
    }else{
      throw new Error("connection should be a Connection object");
    }
  }

  getConnections(){
    return this_userConnections;
  }

  updateConnection(userConnection){

  }
}
module.exports = UserProfile;
