class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    playGame() {
        let attacker = this.player1.health <= this.player2.health ? this.player1 : this.player2;
        let defender = attacker === this.player1 ? this.player2 : this.player1;

        while (this.player1.isAlive() && this.player2.isAlive()) {
            attacker.attackPlayer(defender);
            [attacker, defender] = [defender, attacker];
        }

        const winner = this.player1.isAlive() ? this.player1 : this.player2;
        console.log(`${winner.name} wins the game!`);
    }
}

export default Game;