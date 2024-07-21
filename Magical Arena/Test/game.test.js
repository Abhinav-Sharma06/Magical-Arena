import { expect } from 'chai';
import Player from '../src/Player.js';
import Game from '../src/Game_Logic.js';

describe('Game Class', () => {
    it('should initialize with two players', () => {
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);
        const game = new Game(playerA, playerB);

        expect(game.player1).to.equal(playerA);
        expect(game.player2).to.equal(playerB);
    });

    
    it('should correctly simulate a game until one player wins', () => {
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);
        const game = new Game(playerA, playerB);

        game.playGame();

        const winner = playerA.isAlive() ? playerA : playerB;
        expect(winner.isAlive()).to.be.true;
        expect(playerA.isAlive() || playerB.isAlive()).to.be.true;
    });
});
