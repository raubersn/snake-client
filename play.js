//Importing the TCP connection from the client module
const {connect} = require("./client.js");
//Importing the keyboard's event hanlers
const {setupInput} = require("./input.js");

//Creating the connection
console.log("Connecting ...");
const conn = connect();

//Assigning the event handlers to send commands to the server
setupInput(conn);