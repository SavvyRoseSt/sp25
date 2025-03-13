// objects
const Mango = {
    // properties (variables that belong to this object)
    Name: "Mango",
    Hp: [10],
    Heal_Time: "2 mins",
    Like: "Love!",

    //Methods (function that belongs to object)
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

    sideeye() {return this.reaction;},
};

const Roach = {
    Name: "Roach",
    Hp: [8],
    Heal_Time: "30 mins",
    Like: "Enjoys playing with bug.",

    hyper() {return this.reaction;},
};

const cheese = {
    Name: "Cheese",
    Hp: [4.5],
    Heal_Time: "7 yrs",
    Like: "lacks nutrition needed",

    grumpy() {return this.reaction;},

    irritable(bitesHand){
        this.Hp -= bitesHand;
    },
};

const Rotten = {
    Name: "Rotten Apple",
    Hp: [2],
    Heal_Time: "only has 15 min to live",
    Like: "Disgusted,....No! Turns Dil into Zombie...",

    disgust() {return this.reaction;},

    zombie(bitesFaceOff){
        this.Hp -= bitesFaceOff;
    },
};

function showHp() {
    console.log("Hp:". this.Hp)
}

// Reaction effects healing time / relationship

function attack() {
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