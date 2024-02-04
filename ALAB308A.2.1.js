const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
}

function getInventory(adv){
    adv.inventory.forEach(element => {
        console.log(element)
    });
}

getInventory(adventurer)