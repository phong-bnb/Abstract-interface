import {Tiger} from "./Tiger";
import {Oranger} from "./Oranger";
import {Chicken} from "./Chicken";
import {Apple} from "./Apple";
let animal = []
animal[0]=new Tiger()
animal[1]=new Chicken()
animal.forEach((item,index)=>{
    console.log(item.MakeSound())
})
let fruit = []
fruit[0]=new Apple()
fruit[1]=new Oranger()
fruit.forEach((item,index)=>{
    console.log(item.howtoEat())
})