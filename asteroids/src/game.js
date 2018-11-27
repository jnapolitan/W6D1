const Asteroid = require('./asteroid.js')

function Game () {
    this.asteroids = [];

    this.addAsteroids();
}

Game.DIM_X = 900;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 30;

Game.prototype.addAsteroids = function addAsteroids() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({pos: this.randomPos()}));
    }
};

Game.prototype.randomPos = function randomPos() {
    return [Math.floor(Math.random() * 900) + 1, 
    Math.floor(Math.random() * 500) + 1];
};

Game.prototype.draw = function draw(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.asteroids.forEach (asteroid => asteroid.draw(ctx));
};

Game.prototype.moveObjects = function move() {
    this.asteroids.forEach (asteroid => asteroid.move());
}

Game.prototype.wrap = function wrap (pos) {
    if (pos[0] > 900) pos[0] = 0;
    if (pos[1] > 500) pos[1] = 0;
    return pos;
}

module.exports = Game;