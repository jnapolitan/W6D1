function sum(...args) {
    let sum = 0;
    args.forEach (el => sum += el);
    return sum;
}

Function.prototype.myBindArgs = function(ctx) {
    const func = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function() {
        const callArgs = Array.from(arguments);
        return func.apply(ctx, bindArgs.concat(callArgs));
    };
};

Function.prototype.myBind = function(ctx, ...bindArgs) {
    return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

function curriedSum(numArgs) {
    const numbers = [];
    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            result = 0;
            numbers.forEach(el => result += el);
            return result;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
} 

Function.prototype.curry = function(numArgs) {
    const func = this;
    const args = [];

    function _curried(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return func.apply(null, args);
        } else {
            return _curried;
        } 
    }
    return _curried;
}

Function.prototype.curry2 = function(numArgs) {
    const args = [];

    function _curried = (arg) => {
        args.push(arg);
        if (args.length === numArgs) {
            return this(...args);
        } else {
            return _curried;
        }
    }
    return _curried;
}
