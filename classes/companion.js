import Character from "./character";

class Companion extends Character {
    constructor (name, type) {
      super(name);
      this.type = type;
    }
  }

  const leo = new Companion("Leo", "Cat");
  const frank = new Companion("Frank", "Flea");

  export default {leo, frank};