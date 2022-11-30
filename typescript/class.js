var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Employee.prototype.methods = function () {
        return "".concat(this.name, " stays at ").concat(this.address);
        // return this.name +" "+ this.address;
    };
    return Employee;
}());
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(id, name, address) {
        return _super.call(this, id, name, address) || this;
    }
    manager.prototype.methods1 = function () {
        return "".concat(this.name, " is manager at ").concat(this.address);
    };
    return manager;
}(Employee));
var Akshay = new Employee(1, 'Akshay', 'Gachibowli');
var address = Akshay.methods();
var Chiluveru = new manager(2, 'Akshay Chiluveru', 'Manikonda');
var address1 = Chiluveru.methods1();
// let concate = Akshay.methods();
// Akshay.id = 1;
// Akshay.name = 'Akshay';
// Akshay.address = 'Gachibowli'
console.log(Akshay);
console.log(address);
console.log(address1);
// console.log(concate);
