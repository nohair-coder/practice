var jsonp = function (url, data, callback) {
    // 1.将传入的data数据转化为url字符串形式
    // {id:1,name:'jack'} => id=1&name=jack
    var dataString = url.indexof('?') == -1 ? '?' : '&';
    for (var key in data) {
        dataString += key + '=' + data[key] + '&';
    };
    // 2 处理url中的回调函数
    // cbFuncName回调函数的名字 ：my_json_cb_名字的前缀 + 随机数（把小数点去掉）
    var cbFuncName = 'my_json_cb_' + Math.random().toString().replace('.', '');
    dataString += 'callback=' + cbFuncName;
    // 3.创建一个script标签并插入到页面中
    var scriptEle = document.createElement('script');
    scriptEle.src = url + dataString;
    // 4.挂载回调函数
    window[cbFuncName] = function (data) {
        callback(data);
        // 处理完回调函数的数据之后，删除jsonp的script标签
        document.body.removeChild(scriptEle);z
    }
    document.body.appendChild(scriptEle);
}


// function jsonp(url, param, callback) {
//     var callbackSuffix = Math.random().toString().replace('.', '');
//     // console.log(callbackSuffix);  // 07626840955849186
//     var callbackName = "callback_function" + callbackSuffix;
//     // console.log(callbackName); // callback_function07626840955849186
//     window[callbackName] = callback;
//     var queryString = url.indexOf('?') == -1 ? "?" : '&';
//     // console.log(queryString); // ?
//     for (var key in param) {
//         queryString += key + '=' + param[key] + '&';
//     }
//     // console.log(queryString); // ?count=10&start=15&
//     queryString += 'callback=' + callbackName;
//     // console.log(queryString); // ?count=10&start=15&callback=callback_function07626840955849186
//     var scriptElement = document.createElement('script');
//     scriptElement.src = url + queryString;
//     document.body.appendChild(scriptElement);
// }
