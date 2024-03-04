import Character from "./character";

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

const robin = new Adventurer("Robin","Adventurer");
const rival = new Adventurer("Rival","Adventurer");

export default {robin, rival};