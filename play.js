//Importing the TCP connection from the client module
const {connect} = require("./client.js");
//Importing the keyboard's event hanlers
const {setupInput} = require("./input.js");

console.log("Connecting ...");
connect();

setupInput();

