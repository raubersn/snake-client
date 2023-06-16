const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "127.0.0.1", // IP address
    port: 50541// PORT number
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log it for the player
  conn.on("data", x => console.log(x));

  return conn;
};

module.exports = {connect};