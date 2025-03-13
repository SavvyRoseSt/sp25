// typs
const munch = ["Mango", "Beans", "Roach", "Cheese", "Rotten"];

console.log(munch);
console.table(munch);

// Reaction effects healing time / relationship

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

const Cheese = {
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