const productsRef = document.querySelector("#products");
console.log("Refrence to Element")

const products =["My First Fire", 
"Handy Hand",
"NapSack",
"Hot Tub Wildlife Feeder",
"Toilet Meadow",
"Pudding Pouch",];

console.log(" Our Products:");


for (let i = 0; i < products.length; i++) {
console.log(products[i]);
} 

const myfirstfire = document.getElementById("p1");
console.log( products[0], myfirstfire);

const handyhand = document.getElementById("p2");
console.log( products[1], handyhand);

const naps = document.getElementById("p3");
console.log( products[2], naps);

const htub = document.getElementById("p4");
console.log( products[3], htub);

const mead = document.getElementById("p5");
console.log( products[4], mead);

const puddin = document.getElementById("p6");
console.log( products[5], puddin);