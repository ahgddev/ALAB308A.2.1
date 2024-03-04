let {leo, frank} = require("./classes/companion");
let {robin, rival} = require("./classes/adventurer");

function getInventory(adv){
    adv.inventory.forEach(element => {
        console.log(element)
    });
}


robin.roll();
robin.duel(rival)