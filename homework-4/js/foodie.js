// typs
const munch = ["Mango", "Beans", "Roach", "Cheese", "Rotten"];

console.log(munch);
console.table(munch);

// Reaction effects healing time / relationship

function attack(sad) {
    const Hp = this.Hp - [2];
    if (Hp <= 3) {
        return 0;
    } else {
        return Hp;
    }
};

// objects
const Mango = {
    // properties (variables that belong to this object)
    Name: "Mango",
    Hp: [10],
    Heal_Time: "2 mins",
    Like: "Love!",

    //Methods (function that belongs to object)
    Hp: Hp,
    kiss() {return this.reaction;},

    imprinted_on_you(friends_for_life){
        this.Hp += friends_for_life; 
    },
};

const Beans = {
    Name: "Beans",
    Hp: [6.5],
    Heal_Time: "1 hr",
    Like: "Meh...",

    Hp: Hp,
    sideeye() {return this.reaction;},
};

const Roach = {
    Name: "Roach",
    Hp: [8],
    Heal_Time: "30 mins",
    Like: "Enjoys playing with bug.",

    Hp: Hp,
    hyper() {return this.reaction;},
};

const Cheese = {
    Name: "Cheese",
    Hp: [4.5],
    Heal_Time: "7 yrs",
    Like: "lacks nutrition needed",

    Hp: Hp,
    grumpy(Sad) {return this.reaction;},

    irritable(bitesHand){
        this.Hp -= bitesHand;
    },
};

const Rotten = {
    Name: "Rotten Apple",
    Hp: [2],
    Heal_Time: "only has 15 min to live",
    Like: "Disgusted,....No! Turns Dil into Zombie...",

    Hp: Hp,
    disgust() {return this.reaction;},

    zombie(bitesFaceOff){
        this.Hp -= bitesFaceOff;
    },
};

 console.log("Hp:". this.Hp)
 
function attack(Sad) {
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