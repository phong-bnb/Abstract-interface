"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
// import {Retangle} from "./Retangle";
// import {HowtoColor, Resizeable} from "./resize";
//
//
// export class Square implements Retangle,Resizeable,HowtoColor{
//     edge:number
//     color:string
//     constructor(edge:number,color:string) {
//         this.edge=edge
//         this.color=color
//     }
//     getArea(): number {
//         return this.edge
//     }
//     getPerimeter(): number {
//         return (this.edge*this.edge)
//     }
//     resize(percent: number) {
//         this.edge+=(this.edge*percent)/100
//     }
//
//     howtoColor() {
//         this.color
//     }
// }
var Retangle_1 = require("./Retangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    Square.prototype.howtoColor = function () {
        return "123";
    };
    return Square;
}(Retangle_1.Retangle));
exports.Square = Square;
