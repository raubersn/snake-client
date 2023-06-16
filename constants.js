// Connection attributes
const IP = "localhost"; // IP address
const PORT = 50541; // PORT number
const PLAYER_NAME = "RSN";
const EXIT_KEY = `\u0003`;

//Messages
const CREATE_CONNECTION = "Connecting ...";
const CONNECT_SUCCESS = "Successfully connected to game server.";
const USER_QUIT = "Your wish is my command (QUITTER!)";

//Emote messages
const EMOTE_OUCH = "Say: Ouch!";
const EMOTE_HURRAY = "Say: Hurray!";
const EMOTE_KILL = "Say: One less sneak...";
const EMOTE_LAUGHT = "Say: LOL!!";
const EMOTE_GOOD_GAME = "Say: Good game";
const EMOTE_MAD = "Say: Grrrrrrr..!";

//Movement keys
const MOVEMENT_UP = "Move: up";
const MOVEMENT_DOWN = "Move: down";
const MOVEMENT_LEFT = "Move: left";
const MOVEMENT_RIGHT = "Move: right";
const UP_ARROW = `\u001b[A`; // up arrow key
const DOWN_ARROW = `\u001b[B`; //down arrow key
const LEFT_ARROW = `\u001b[D`; //left arrow key
const RIGHT_ARROW = `\u001b[C`; //right arrow key

const messages = {
  CONNECT_SUCCESS,
  USER_QUIT,
  O: EMOTE_OUCH,
  o: EMOTE_OUCH,
  H: EMOTE_HURRAY,
  h: EMOTE_HURRAY,
  K: EMOTE_KILL,
  k: EMOTE_KILL,
  L: EMOTE_LAUGHT,
  l: EMOTE_LAUGHT,
  G: EMOTE_GOOD_GAME,
  g: EMOTE_GOOD_GAME,
  M: EMOTE_MAD,
  m: EMOTE_MAD,
  W: MOVEMENT_UP,
  w: MOVEMENT_UP,
  S: MOVEMENT_DOWN,
  s: MOVEMENT_DOWN,
  A: MOVEMENT_LEFT,
  a: MOVEMENT_LEFT,
  D: MOVEMENT_RIGHT,
  d: MOVEMENT_RIGHT
};

//Exporting the constants to be used in another modules
module.exports = {
  IP,
  PORT,
  PLAYER_NAME,
  EXIT_KEY,
  messages,
  UP_ARROW,
  DOWN_ARROW,
  LEFT_ARROW,
  RIGHT_ARROW,
  CREATE_CONNECTION
};