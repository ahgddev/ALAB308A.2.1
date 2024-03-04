let Character = require("./character");

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      if(this.role != "Adventurer"){
        return console.log(`${this.name} is a ${this.role} and can't wear the Adventurer outfit!`)
      }
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      // Adventurers start with a bow.
      this.inventory.push("bow");
    }
   
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    // Adventurers can bargin with NPCs
    bargin () {
        console.log(`${this.name} is bargaining...`);
        let bargainRoll = Math.random()*10
        if(bargainRoll < 5){
            console.log(`${this.name} failed to bargain!`);
            return false
        } else {
            console.log(`${this.name} successfully bargained!`);
            return true
        }
      } 

      duel (adv) {
    while (this.health > 50 && adv.health > 50){
        let roll1 = this.roll();
        let roll2 = adv.roll();
        if(roll1 > roll2){
            roll2 -= 1;
            adv.health -= roll2
        } else {
            roll1 -= 1;
            this.health -= roll1
        }
        console.log(`Duel Result: ${this.name} did ${roll1} dmg! ${adv.name} did ${roll2} dmg! ${this.name} has ${this.health} and ${adv.name} has ${adv.health}`)
        }
        if(this.health < 50){
            console.log(`${this.name} lost...`)
        }
        else if(adv.health < 50){
            console.log(`${adv.name} lost...`)
        }
    }
}

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin2 = healers.generate("Robin");
  const robin3 = healers.generate("Robert");
  const robin4 = healers.generate("Robbi");

console.log(healers.findByName("Robert"));

const robin = new Adventurer("Robin","Adventurer");
const rival = new Adventurer("Rival","Adventurer");

module.exports = { robin, rival};