function GameView (options) {
    this.game = options.game;
    this.ctx = options.ctx;
}

GameView.prototype.start = function start() {
    currentGameView = this;
    setInterval(function () {
        currentGameView.game.moveObjects();
        currentGameView.game.draw(currentGameView.ctx);
    }, 20);
}

module.exports = GameView;