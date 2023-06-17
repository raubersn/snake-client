const { EXIT_KEY,
  messages,
  UP_ARROW,
  DOWN_ARROW,
  LEFT_ARROW,
  RIGHT_ARROW } = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => handleUserInput(key));

  return stdin;
};

//Callback function to handle user input events
const handleUserInput = function(key) {
  // If the user wishes to quit (CTRL+C), terminate game execution
  if (key === EXIT_KEY) {
    console.log(messages.USER_QUIT);
    process.exit();
  }

  //if the key was set in the constant object, sends a message to the server
  if (messages[key]) {
    connection.write(messages[key]);
  } else { //Kept for compatibility with the arrow keys before creating the constant module
    switch (key) {
    // Send the UP command to the server
    case UP_ARROW:
      connection.write(messages.W);
      break;
    // Send the DOWN command to the server
    case DOWN_ARROW:
      connection.write(messages.S);
      break;
    // Send the LEFT command to the server
    case LEFT_ARROW:
      connection.write(messages.A);
      break;
    // Send the RIGHT command to the server
    case RIGHT_ARROW:
      connection.write(messages.D);
      break;
    }
  }
};

//Exporting as an object to be used in other modules
module.exports = {setupInput};