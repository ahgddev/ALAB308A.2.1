//Part 1: Humble Beginnings
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small hat", "sunglasses"]
//         }
//     },
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

function getInventory(adv){
    adv.inventory.forEach(element => {
        console.log(element)
    });
}

// getInventory(adventurer)
// adventurer.roll() 

//Part 2: Class Fantasy
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }

    roll = function (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
  }

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll();

//Part 3: Class Features
class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      // Adventurers start with a bow.
      this.inventory.push("bow");
    }
    //Part 4: Class Uniforms
    static MAX_HEALTH = 100;
    static ROLES = ["Fighter", "Healer", "Wizard", "Dragon", "Werewolf","Adventurer"];
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
  }

  class Companion extends Character {
    constructor (name, type) {
      super(name);
      this.type = type;
    }
  }

  const robin = new Adventurer("Robin","Adventurer");
  const leo = new Companion("Leo", "Cat");
  const frank = new Companion("Frank", "Flea")
  // robin.inventory = ["sword", "potion", "artifact"];
  // robin.companion = new Character("Leo");
  // robin.companion.type = "Cat";
  // robin.companion.companion = new Character("Frank");
  // robin.companion.companion.type = "Flea";
  // robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // robin.roll();