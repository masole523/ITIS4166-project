const Connection = require('./connection');

class UserConnection{
  constructor(connection, rsvp){
    if(connection instanceof Connection){
      console.log("connection is UserConnection");
      this._connection = connection;
    }else{
      throw new Error('connection should be a Connection object');
    }
    this._rsvp = rsvp;
    console.log(connection);
  }

  getConnection(){
    return this.connection;
  }

  setConnection(_value){
    if(value instanceof Connection){
      this._connection = value;
    }else{
      throw new Error('connection should be a Connection object')
    }
  }

  getRsvp(){
    return this._rsvp;
  }

  setRsvp(value){
    this._rsvp = value;
  }
}
module.exports = UserConnection;
