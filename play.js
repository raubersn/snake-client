//Importing the TCP connection from the client module
const {connect} = require("./client.js");
//Importing the keyboard's event hanlers
const {setupInput} = require("./input.js");
//Importing the message constants
const { CREATE_CONNECTION } = require("./constants");


//Creating the connection
console.log(CREATE_CONNECTION);
const conn = connect();

//Assigning the event handlers to send commands to the server
setupInput(conn);