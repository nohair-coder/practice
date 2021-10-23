function curry(func) {
    return function () {
        let args = Array.from(arguments).slice(1)
        return func.apply(this, args)
    }
}

// 支持多参数传递
function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length; // 参数个数 
    var args = args || [];

    return function () {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);

        // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
        if (_args.length < len) {
            return progressCurrying.call(_this, fn, _args);
        }

        // 参数收集完毕，则执行fn
        return fn.apply(this, _args);
    }
}
