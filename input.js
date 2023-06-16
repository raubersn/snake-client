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
    case `\u001b[A`: // up ARROW
    case "W":
    case "w":
      connection.write("Move: up");
      break;
    // Send the DOWN command to the server
    case `\u001b[B`: //DOWN arrow
    case "S":
    case "s":
      connection.write("Move: down");
      break;
    // Send the RIGHT command to the server
    case `\u001b[C`: //RIGHT arrow
    case "D":
    case "d":
      connection.write("Move: right");
      break;
    // Send the LEFT command to the server
    case `\u001b[D`: //LEFT arrow
    case "A": 
    case "a":
      connection.write("Move: left");
      break;
    // Possible 'emotes'
    case "O":
    case "o":
      connection.write("Say: Ouch!");
      break;
    case "H":
    case "h":
      connection.write("Say: Hurray!");
      break;
    case "K":
    case "k":
      connection.write("Say: One less sneak...");
      break;
    case "L":
    case "l":
      connection.write("Say: LOL!!");
      break;
    case "G":
    case "g":
      connection.write("Say: Good game");
      break;
    case "M":
    case "m":
      connection.write("Say: Grrrrrrr..!");
      break;
  }
};

//Exporting as an object to be used in other modules
module.exports = {setupInput};