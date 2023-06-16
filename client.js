const net = require("net");
const { IP, PORT, PLAYER_NAME, messages } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // provide feedback to the client as soon as the connection is stablihed
  conn.on("connect", () => {
    console.log(messages.CONNECT_SUCCESS);

    // send the players initials to the server
    conn.write(`Name: ${PLAYER_NAME}`);

    /*
    Move testing
    setTimeout(x => conn.write("Move: up"), 3000);
    setTimeout(x => conn.write("Move: left"), 6000);
    setTimeout(x => conn.write("Move: down"), 9000);
    */
    
  });

  // handle incoming data and console.log it for the player
  conn.on("data", x => console.log(x));

  return conn;
};

//Exporting as an object to be used in other modules
module.exports = {connect};