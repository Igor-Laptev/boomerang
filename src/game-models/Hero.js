// Наш герой.
const Boomerang = require("./Boomerang");
const player = require('play-sound')(opts = {});
const audio = player.play('src/sounds/John Williams - Main Theme ( OST _Звёздные войны_).mp3', function (err) {
  if (err) throw err;
});
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
    audio.kill();
    console.log("YOU ARE DEAD!💀");
    const music = player.play('src/sounds/lord-of-the-rings meloboom.mp3', function (err) {
      if (err) throw err;
    });
    // music.kill();
    process.exit();
  }
}

module.exports = Hero;
