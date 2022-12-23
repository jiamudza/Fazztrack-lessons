let x = ["satu"];
let y = x.concat(["dua"]); //concat

console.log(y);

let z = y.length; //length
console.log(z);

let a = y.toLocaleLowerCase(); //lowercase
let b = y.toLocaleUpperCase(); //uppercase

console.log(a);
console.log(b);

let c = x.replace(/a/g, "o"); //replace
console.log(c)


let array = [1,2,3,4,5,6];

let d = array.join("") //join
console.log(d);

array.pop();    //pop
console.log(array)

array.push("string"); //push
console.log(array);

array.shift(); //shift
console.log(array)

array.unshift("string") //unshift
console.log(array);