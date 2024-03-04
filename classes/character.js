class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }

    //Part 4: Class Uniforms
    static MAX_HEALTH = 100;
    static ROLES = ["Fighter", "Healer", "Wizard", "Dragon", "Werewolf","Adventurer"];
    
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result
    }
  }

  module.exports = Character;