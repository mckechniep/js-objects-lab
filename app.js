const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

//Excerise 1
//console.dir(pokemon, { maxArrayLength: null })

console.log(
  "\n *********************************************** \n Excerise 1: \n *********************************************** \n",
  pokemon[58].name
);

// use console.log() to log JUST the name of the
// Pokemon with the number 59 using the index of
//  the Pokemon in the array. Feel free to uncomment
//  the console.dir() as needed to help you complete
//  the rest of the lab.

//Exercise 2

// As you move through the exercises:

//     game.party will hold an array of Pokemon
// objects that will be retrieved from the pokemon
// array we reviewed in Exercise 1. These are Pokemon
// that you have caught!
//      game.gyms holds an array of objects, each
// representing a gym (checkpoints placed throughout
// the game). Note the completed boolean property
// on each. This will be important later.
//      game.items holds an array of objects, each
// representing an item in a player’s inventory.

/*
Exercise 3
1. Add a new property to the `game` object. Let's 
call it "difficulty".
2. Choose a value for "difficulty" that you think
 fits the game. Ex: "Easy", "Med" or "Hard". 
 How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "Med";
console.log(
  "\n *********************************************** \n Excerise 3: \n *********************************************** \n",
  game
);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` 
array. Remember, a starter Pokémon's `starter`
property is true.
2. Add this Pokémon to the `game.party` array. 
Which array method will you use to add them?


Solve Exercise 4 here:
*/
const pikachu = pokemon.find((poki) => poki.name === "Pikachu");

game.party.push(pikachu);

console.log(
  "\n *********************************************** \n Excerise 4: \n *********************************************** \n",
  game
);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


    Solve Exercise 5 here:
    */
const snorlax = pokemon.find((poki) => poki.name === "Snorlax");
const charmander = pokemon.find((poki) => poki.name === "Charmander");
const electabuzz = pokemon.find((poki) => poki.name === "Electabuzz");

game.party.push(charmander, electabuzz, snorlax);
console.log(
  "\n *********************************************** \n Excerise 5: \n *********************************************** \n",
  game
);

/*

Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

const weakGym = game.gyms.filter((gym) => gym.difficulty <= 3);
weakGym.forEach((gym) => {
  gym.completed = true;
});
console.log(
  "\n *********************************************** \n Excerise 6: \n *********************************************** \n"
);
console.log(weakGym);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
const raichu = pokemon.find((poki) => poki.name === "Raichu");
game.party.splice(0, 1, raichu);

console.log(
  "\n *********************************************** \n Excerise 7: \n *********************************************** \n"
);
console.log(game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

console.log(
  "\n *********************************************** \n Excerise 8: \n *********************************************** \n"
);
game.party.forEach((pokemon) => {
  console.log(pokemon.name);
});

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.



Solve Exercise 9 here:
*/
console.log(
  "\n *********************************************** \n Excerise 9: \n *********************************************** \n"
);
const starterPokemon = pokemon.filter((poke) => poke.starter);
console.log(starterPokemon);

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
console.log(
  "\n *********************************************** \n Excerise 10: \n *********************************************** \n"
);
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);
};
game.catchPokemon(charmander);

console.log(game.party);
/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips: method,
For this exercise, it's okay to have a negative number of pokeballs.
After updating the call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
game.catchPokemon = function (pokemonObj) {
  const pokeball = game.items.find((item) => item.name === "pokeball");
  game.party.push(pokemonObj);

  if (pokeball) {
    pokeball.quantity -= 1;
  }
};
const charizard = pokemon.find((poki) => poki.name === "Charizard");

game.catchPokemon(charizard);

console.log(
  "\n *********************************************** \n Excerise 11: \n *********************************************** \n"
);
console.log("pokeballs, potions, and candy leftover:", game.items);

// console.log(game.party);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How 
will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
const mediumGyms = game.gyms.filter((gyms) => gyms.difficulty <= 5);
mediumGyms.forEach((gym) => {
  gym.completed = true;
});
console.log(
  "\n *********************************************** \n Excerise 12: \n *********************************************** \n"
);
console.log(mediumGyms);
/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete
 gyms.
2. How will you iterate through the `gyms` array and update the tally? 
Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set
    to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of
    `true` for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
    `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0,
  };

  game.gyms.forEach((gym) => {
    if (gym.completed) {
      gymTally.completed += 1;
    } else {
      gymTally.incomplete += 1;
    }
  });

  console.log(gymTally);
};

console.log(
  "\n *********************************************** \n Excerise 13: \n *********************************************** \n"
);
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon 
in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function () {
  //let numPokemonParty = game.party.length;
  return game.party.length;
};
console.log(
  "\n *********************************************** \n Excerise 14: \n *********************************************** \n"
);
console.log("Pokemon at the party:", game.partyCount());

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

console.log("\n *********************************************** \n Excerise 15: \n *********************************************** \n");
console.log(game.gyms)

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log(
  "\n *********************************************** \n Excerise 16: \n *********************************************** \n"
);
console.log(game);
