// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(game) {
    this.game = game;
    this.count = "";
  }
  render(track) {
    const yourTeamName = "Elbrus";

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(""));
    console.log(`\n\n  Your OWNED ${this.count} demons, foxie`);
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
