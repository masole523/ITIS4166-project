class User{
  constructor(userId, firstName, lastName, email){
    this._userId = userId;
    this._firstName = firstName;
    this._lastName = lastName;
    this._emailAddress = email;
  }

  getUserID(){
    return this._userID;
  }

  setUserID(value){
    this._userID = value;
  }

  getFirstName(){
    return this._firstName;
  }

  setFirstName(value){
    this._firstName = value;
  }

  getLastName(){
    return this._lastName;
  }

  setLastName(value){
    this.lastName = value;
  }

  getEmail(){
    return this._emailAddress;
  }

  setEmailAddress(value){
    this._emailAddress = value;
  }
}
module.exports = User;
