// Наш герой.
const Boomerang = require("./Boomerang");
class Hero {
  constructor({ position }) {
    this.skin = "🦊"; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = new Boomerang();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.position===this.position+1
      this.boomerang.moveRight()
     // if (this.hero.boomerang.position<this.hero.position) {
     //   this.hero.boomerang.position===this.hero.position+1
     
    if (this.boomerang.position=this.position) {
      this.boomerang.moveLeft()
    }
    
  }

  die() {
    this.skin = "💀";
    console.log("YOU ARE DEAD!💀");
    process.exit();
  }
}

module.exports = Hero;
