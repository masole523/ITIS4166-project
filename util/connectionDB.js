const Connection = require('../models/connection');

var virtual1 = new Connection();
var virtual2 = new Connection();
var virtual3 = new Connection();
var food1 = new Connection();
var food2 = new Connection();
var food3 = new Connection();

virtual1.setConnectionID(0);
virtual1.setName("Nutrition 101: Eat for Better ZZZ's");
virtual1.setTopic("Virtual");
virtual1.setDetails("Join Harmony Nutrition as we discuss common dietary causes for sleep disruption and simple dietary " +
 "approaches to get better zzz’s. We will also make a tart cherry kemboocha!");
virtual1.setDate("Tuesday, April 6th");
virtual1.setStartTime("6:00pm");
virtual1.setEndTime("7:30pm");
virtual1.setLocationName("Zoom link...");
virtual1.setHost("Harmony Nutrition");

virtual2.setConnectionID(1);
virtual2.setName("Virtual Paint Party: Happy Trees and Mountains");
virtual2.setTopic("Virtual");
virtual2.setDetails("Let’s have a paint party! During this session, " +
"you’ll follow an experienced artist in painting the piece, 'Happy Trees and Mountains.'");
virtual2.setDate("Saturday, April 10th");
virtual2.setStartTime("2:00pm");
virtual2.setEndTime("3:30pm");
virtual2.setLocationName("Zoom link...");
virtual2.setHost("Paint the Town");


virtual3.setConnectionID(2);
virtual3.setName("Virtual Mixology Class & Happy Hour: Pirates of the Cocktail");
virtual3.setTopic("Virtual");
virtual3.setDetails("Learn how to create your favorite cocktails and specialty drinks with an expert mixologist!");
virtual3.setDate("Tuesday, April 15th");
virtual3.setStartTime("2:30pm");
virtual3.setEndTime("3:30pm");
virtual3.setLocationName("Zoom link...");
virtual3.setHost("Chef Hospitality");


food1.setConnectionID(3);
food1.setName("Food Truck Friday");
food1.setTopic("Food");
food1.setDetails("Enjoy a free meal on us! First 30 anyways.");
food1.setDate("Friday, April 2nd");
food1.setStartTime("12:30am");
food1.setEndTime("2:30");
food1.setLocationName("Out in front of the leasing office");
food1.setHost("No Forks Given");


food2.setConnectionID(4);
food2.setName("Coffee Truck of the Week");
food2.setTopic("Food");
food2.setDetails("We will treat the first 40 Residents to one beverage of their choice!");
food2.setDate("Tuesday, April 6th");
food2.setStartTime("8:00am");
food2.setEndTime("10:00am");
food2.setLocationName("Out in front of the leasing office");
food2.setHost("Detour Mobile Coffee Bar");


food3.setConnectionID(5);
food3.setName("Wine Tasting");
food3.setTopic("Food");
food3.setDetails("Come enjoy the fine wine we have to offer and mingle with your other residents.");
food3.setDate("Saturday, April 10th");
food3.setStartTime("9:00pm");
food3.setEndTime("11:30am");
food3.setLocationName("Club House");
food3.setHost("Cortland Noda");


var connections = [];

connections.push(virtual1);
connections.push(virtual2);
connections.push(virtual3);
connections.push(food1);
connections.push(food2);
connections.push(food3);

class ConnectionDB{
  constructor() {}

  getConnections(){
      return connections;
  }

  getConnection(connectionId){
    if (connectionId !== undefined) {
      let connection = connections.filter(
        (connection) => connection._connectionId == connectionId
      );
      return connection[0];
    }else{
      throw new Error("Invalid Connection Id");
    }
  }

  getTopics(){
    let topics = new Array();
    connections.forEach((connection) => {
        topics.push(connection.getConnectionTopic());
    });
    return topics;
  }
}

module.exports = ConnectionDB;
