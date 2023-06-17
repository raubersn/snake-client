# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

!["screenshot description"](#)
!["screenshot description"](#)

## Server Ehancements
A streched version of the server is available [here](https://github.com/raubersn/snek-multiplayer). It allows broadcasting messages to the players on the following events:
* When a new player joins the game: all the other players receive a message and the total number of players in the game.
* When a player leaves the game: all the other players receive a message. If the player leaving the game has set the payer name, it is included in the message.

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## Manual

### Commands

Use the following keys to move the snake:
* Up: W / &uarr; arrow
* Down: S / &darr; arrow
* Left: A / &larr; arrow
* Right: D / &rarr; arrow

### Emotes

You can send message to the other player to express the following emotions (press the highlighted key):
* **O**uch
* **H**urray
* Excitement for **k**illing a player
* **L**aughting
* **G**ood Game
* You are **M**ad