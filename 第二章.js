/*
 * @Author: Cat9Yuko 
 * @Date: 2020-11-13 15:38:54 
 * @Last Modified by: Cat9Yuko
 * @Last Modified time: 2020-11-20 09:01:39
 */



var Book = function (id, bookname, price) {
    this.id = id;
    this.bookname = bookname;
    this.price = price;
}

Book.prototype = {
    display: function () {
        console.log('display');
        return this;
    }
}

var book = new Book(10, 'Javascript设计模式', 50);
console.log(book.bookname);


var Book = function (id, name, price) {
    // 私有属性
    var num = 1;
    // 私有方法
    function checkId() {}
    // 特权方法
    this.getName = function () {};
    this.getPrice = function () {};
    this.setName = function () {};
    this.setPrice = function () {};
    // 对象公有属性
    this.id = id;
    // 对象公有方法
    this.copy = function () {};
    // 构造器
    this.setName();
    this.setPrice();
    // 类静态公有属性(对象不能访问)
    Book.isChindes = true;
    // 类静态公有方法(对象不能访问)
    Book.resetTime = function () {
        console.log('new Time')
    };
    Book.prototype = {
        // 公有属性
        isJSBook: false,
        // 公有方法
        display: function () {}
    }
}

var b = new Book(11, 'JavaScript设计模式', 50);
console.log(Book.isChindes);
Book.resetTime();
console.log(b.num);
console.log(b.isJSBook);
console.log(b.id);
console.log(b.isChindes);


// 利用闭包实现
var Book = (function () {
    // 静态私有变量
    var bookNum = 0;
    // 静态私有方法
    function checkBook(name) {}
    // 返回构造函数
    return function (newId, newName, newPrice) {
        // 私有变量
        var namme, price;
        // 私有方法
        function checkID(id) {}
        // 特权方法
        this.getName = function () {}
        this.getPrice = function () {}
        this.setName = function () {}
        this.setPrice = function () {}
        // 公有属性
        this.id = newId;
        // 公有方法
        this.copy = function () {};
        bookNum++;
        if (bookNum > 100) {
            throw new Error('我们报错了.')
        }
        // 构造器
        this.setName(name);
        this.setPrice(price);
    }
})();

Book.prototype = {
    // 静态公有属性
    isJSBook: false,
    display: function () {}
};