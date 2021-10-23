function deep(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deep(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
    return objClone;
  } else {
    return obj;
  }
}


function deep1(obj) {
  if (obj && typeof obj === 'object') {
    var res = Array.isArray(obj) ? [] : {}
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof key === 'object') {
          res[key] = deep(obj[key])
        } else {
          res[key] = obj[key]
        }
      }
    }
    return res
  } else {
    return obj
  }
}

console.log(deep1(2))
