"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangle = void 0;
var Retangle = /** @class */ (function () {
    function Retangle(weight, height) {
        this.height = height;
        this.weight = weight;
    }
    Retangle.prototype.resize = function (percent) {
        this.height += (this.height * percent) / 100;
        this.weight += (this.weight * percent) / 100;
        return this.height;
    };
    Retangle.prototype.getArea = function () {
        return this.weight * this.height;
    };
    Retangle.prototype.getPerimeter = function () {
        return (this.weight + this.height) * 2;
    };
    return Retangle;
}());
exports.Retangle = Retangle;
