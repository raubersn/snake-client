const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address
    port: 50541// PORT number
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // provide feedback to the client as soon as the connection is stablihed
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");

    // send the players initials to the server
    conn.write("Name: RSN");

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