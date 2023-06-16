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
const handleUserInput = function (key) {
  switch(key) {
    // If the user wishes to quit (CTRL+C), terminate game execution  
    case `\u0003`:
      console.log("Your wish is my command (QUITTER!)");
      process.exit();
    // Send the UP command to the server
    case `\u001b[A`:
      connection.write("Move: up");
      break;
    // Send the DOWN command to the server
    case `\u001b[B`:
      connection.write("Move: down");
      break;
    // Send the RIGHT command to the server
    case `\u001b[C`:
      connection.write("Move: right");
      break;
    // Send the LEFT command to the server
    case `\u001b[D`:
      connection.write("Move: left");
      break;
  }
};

//Exporting as an object to be used in other modules
module.exports = {setupInput};