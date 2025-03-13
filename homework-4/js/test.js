console.log("Cozy home");

console.log("2 + 7 =", 2 + 7);
console.log("2 + 2 = ", 2 + Number("2"));
console.log("'2' + '2' =", "2" + "2");

console.log("My name is " + "Savvy");

if (true) {
console.log("Always true");} else {
console.error("This shouldn't Happen");}

let fishcake = 0.75;
if (fishcake >= 0.5) {
}; 
// ----------------------------
console.log("# of Habitats", favoriteHabitat.length);
for (let i = 0; i < favoriteHabitat.length; i++) {
console.log(i);
} 
// ----------------------------
console.log("Random pick Habitat:", favoriteHabitat[0]);
console.log("Just Pick One",favoriteHabitat[9]); 
//----------------------
const favoriteHabitat = ["Tundra", "Grassland", "Tropical", "Woodland"];

console.log(favoriteHabitat);
console.table(favoriteHabitat);

//---------- ref Variables (ref the DOM / html Page)

const cribULRef = document.querySelector("#crib");

//--------- Data Variable

const crib = ["Tundra", "Grassland", "Tropical", "Woodland"];

console.log(crib);

// ----------- loop list

for (let i = 0; i < crib.length; i++) {
const crib = crib[i];
console.log(pet);

cribULRef.innerHTML += "<li>" + crib + "</li>";
}
// Dom: ------------------------
const titleRef = document.getElementById("title");
console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");
console.log(itemsRef);
//----------- Reaction
function attack() {
    const Hp = this.Hp
    console.log("Bites Your Hand..."),
    console.log("Abandons you to preadators,..Run...")
};

function destroy() {
    console.log("Dil's tribe comes for Revenge..",
        console.log("Zombie Outbreak Spreads..."),
        console.log("...Way to go! You killed the planet faster than pollution..."))
    };

if (this.Hp >= 5.5) {
    console.log("Happy Ending");} else {
    console.log("No One is Happy...Ending");};