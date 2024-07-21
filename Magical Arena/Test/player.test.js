import { expect } from 'chai';
import Player from '../src/Player.js';

describe('Player Class', () => {
    it('should initialize with correct values', () => {
        const player = new Player('Test Player', 100, 10, 20);
        expect(player.name).to.equal('Test Player');
        expect(player.health).to.equal(100);
        expect(player.strength).to.equal(10);
        expect(player.attack).to.equal(20);
    });

    it('should correctly roll a dice between 1 and 6', () => {
        const player = new Player('Test Player', 100, 10, 20);
        for (let i = 0; i < 100; i++) {
            const roll = player.rollDice();
            expect(roll).to.be.within(1, 6);
        }
    });

});
