import {comparaCircle} from "./ compareTo";
let circles = [];
circles[0] = new comparaCircle(10);
circles[1] = new comparaCircle(20);
circles[2] = new comparaCircle(30);

let result = circles[1].comprateTo(circles[2]);
if(result == 1){
    console.log("The current circle is larger.");
}else{
    console.log("The current circle is smaller.");
}