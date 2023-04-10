"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tiger_1 = require("./Tiger");
var Oranger_1 = require("./Oranger");
var Chicken_1 = require("./Chicken");
var Apple_1 = require("./Apple");
var animal = [];
animal[0] = new Tiger_1.Tiger();
animal[1] = new Chicken_1.Chicken();
animal.forEach(function (item, index) {
    console.log(item.MakeSound());
});
var fruit = [];
fruit[0] = new Apple_1.Apple();
fruit[1] = new Oranger_1.Oranger();
fruit.forEach(function (item, index) {
    console.log(item.howtoEat());
});
