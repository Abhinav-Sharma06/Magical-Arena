
class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive() {
        return this.health > 0;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    attackPlayer(defender) {
        const attackRoll = this.rollDice();
        const attackDamage = this.attack * attackRoll;

        const defenseRoll = defender.rollDice();
        const defenseValue = defender.strength * defenseRoll;

        const damageDealt = attackDamage - defenseValue;

        if (damageDealt > 0) {
            defender.health -= damageDealt;
        }

        console.log(`${this.name} attacks ${defender.name}:`);
        console.log(`Attack Roll: ${attackRoll}, Attack Damage: ${attackDamage}`);
        console.log(`${defender.name} Defense Roll: ${defenseRoll}, Defense Value: ${defenseValue}`);
        console.log(`Damage Dealt: ${damageDealt > 0 ? damageDealt : 0}`);
        console.log(`${defender.name} Health: ${defender.health < 0 ? 0:(defender.health)}\n`);
    }
}

export default Player;
