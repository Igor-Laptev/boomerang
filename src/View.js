// Сделаем отдельный класс для отображения игры в консоли.
// const readline = require('readline-sync');

// const name = readline.question('Как тебя зовут браток?');
class View {
  constructor(game) {
    this.game = game;
    this.count = '';
  }

  render(track) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    // console.log(`Ты? ${name}, куда же ты попал....🤺'BRATOK'🤺'.`);
    console.log(track.join(''));
    console.log(`\n\n  Your OWNED ${this.count} demons, foxie`);
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
