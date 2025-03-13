const favoriteHabitat = ["Tundra", "Grassland", "Tropical", "Woodland"];

console.log(favoriteHabitat);
console.table(favoriteHabitat);

console.log("Choose Dil's Home", favoriteHabitat[0]);

console.log("Just Pick One",favoriteHabitat[9]);

console.log("# of Habitats", favoriteHabitat.length);

for (let i = 0; i < favoriteHabitat.length; i++) {
    console.log(i);
}