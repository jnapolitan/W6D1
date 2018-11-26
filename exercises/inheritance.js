Function.prototype.inherits = function inherits(SuperClass) {
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Function.prototype.inherits2 = function inherits2(SuperClass) {
    this.prototype = Object.create(SuperClass.prototype);
    this.prototype.constructor = this;
}