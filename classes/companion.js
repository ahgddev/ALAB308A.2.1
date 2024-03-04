let Character = require("./character");

class Companion extends Character {
    constructor (name, type) {
      super(name);
      this.type = type;
    }
  }

  const leo = new Companion("Leo", "Cat");
  const frank = new Companion("Frank", "Flea");

  module.exports = { leo, frank};