//Importing the CP connection from the client module
const {connect} = require("./client.js");

console.log("Connecting ...");
const conn = connect();

// setup interface to handle user input from stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => handleUserInput(key));

  return stdin;
};

const handleUserInput = function (key) {
  switch(key) {
    // If the user wishes to quit (CTRL+C), terminate game execution  
    case `\u0003`:
      console.log("Your wish is my command (QUITTER!)");
      process.exit();
  }
};

setupInput();

