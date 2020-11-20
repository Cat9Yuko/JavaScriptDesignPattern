/*
 * @Author: Cat9Yuko 
 * @Date: 2020-11-13 14:42:42 
 * @Last Modified by: Cat9Yuko
 * @Last Modified time: 2020-11-13 15:38:23
 */


var CheckObject = function () {}
CheckObject.prototype = {
    checkName: function () {
        console.log('checkName');
        return this;
    },
    checkEmail: function () {
        console.log('checkEmail');
        return this;
    },
    checkPassword: function () {
        console.log('checkPassword');
        return this;
    }
}
Function.prototype.addMethod = function (name, fn) {
    this[name] = fn;
    return this;
}

var a = new CheckObject();
var methods = function () {};
a.checkEmail().checkName().checkPassword();
methods.addMethod('add',function(){
    console.log('add');
    return this;
}).addMethod('tmd',function(){
    console.log('tmd');
    return this;
})
methods.add().tmd();