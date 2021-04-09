class Connection{
  constructor(connectionID, name, topic, details, date, startTime, endTime, locationName, host, rsvp){
    this._connectionId = connectionID;
    this._connectionName = name;
    this._connectionTopic = topic;
    this._details = details;
    this._date = date;
    this._startTime = startTime;
    this._endTime = endTime;
    this._locationName = locationName;
    this._host = host;
  }

  getConnectionID(){
    return this._connectionId;
  }

  setConnectionID(connectionID){
    this._connectionId = connectionID;
  }

  getName(){
    return this._connectionName;
  }

  setName(name){
    this._connectionName = name;
  }

  getConnectionTopic(){
    return this._connectionTopic;
  }

  setTopic(topic){
    this._connectionTopic = topic;
  }

  getDetails(){
    return this._details;
  }

  setDetails(details){
    this._details = details;
  }

  getDate(){
    return this._date;
  }

  setDate(date){
    this._date = date;
  }

  getStartTime(){
    return this._startTime;
  }

  setStartTime(startTime){
    this._startTime = startTime;
  }

  getEndTime(){
    return this._endTime;
  }

  setEndTime(endTime){
    this._endTime = endTime;
  }

  getLocationName(){
    return this._locationName;
  }

  setLocationName(locationName){
    this._locationName = locationName;
  }

  getHost(){
    return this._host;
  }

  setHost(host){
    this._host = host;
  }

}

module.exports = Connection;
