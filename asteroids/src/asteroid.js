const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

Util.inherits(Asteroid, MovingObject);

const DEFAULTS = {
    COLOR: "#37ff00",
    RADIUS: 30,
    SPEED: 5
} 

function Asteroid(options) {
    options = options || {};
    options.pos = options.pos;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    options.radius = DEFAULTS.RADIUS;
    options.color = DEFAULTS.COLOR; 

    MovingObject.call(this, options);
}

module.exports = Asteroid;