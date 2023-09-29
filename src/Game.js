// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");
const runInteractiveConsole = require("./keyboard");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View(this);
    this.track = [];
    this.def = false;
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    //if (this.hero.attack())
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.hero.boomerang.position <= this.enemy.position - 1) {
      // this.hero.boomerang.moveRight();
      this.enemy.moveLeft();
      this.hero.boomerang.moveRight()
    } else {
      this.hero.boomerang.moveLeft();
    }
    if (this.hero.boomerang.position === this.enemy.position) {
      this.enemy.die();
      this.view.count += "💀";
      this.hero.boomerang.moveLeft();
      this.def = true;
      // this.enemy = new Enemy();
    }
    if (
      this.hero.boomerang.position === this.hero.position+1 &&
      this.def === true
    ) {
      
      this.enemy.die();
      // this.view.count += '💀'
      this.enemy = new Enemy();
    }
  }

  play() {
    runInteractiveConsole(this);
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 100);
  }
}

module.exports = Game;
