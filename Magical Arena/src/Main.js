import Player from "./Player.js";
import Game from "./Game_Logic.js";

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

const game = new Game(playerA, playerB);
game.playGame();
