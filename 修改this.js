var f = function () {
    return this.name
}
var obj = {
    name: 'zhangsan'
}

obj.func = f

var a = obj.func()

console.log(a);

