"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _compareTo_1 = require("./ compareTo");
var circles = [];
circles[0] = new _compareTo_1.comparaCircle(10);
circles[1] = new _compareTo_1.comparaCircle(20);
circles[2] = new _compareTo_1.comparaCircle(30);
var result = circles[1].comprateTo(circles[2]);
if (result == 1) {
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}
