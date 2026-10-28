import readline from 'readline-sync';
import AllRiddles from './riddles/allRiddles.js'
import Player from './classes/Player.js';
import Riddle from './classes/Riddle.js';
import MultipleChoiceRiddle from './classes/MultipleChoiceRiddle.js';

console.log("\n\n__________________________________________");
console.log("\nWelcome to the Riddle Game!");
console.log("-----------------------------");
const playerName = readline.question(`\nWhat is your name? \n`);
const player = new Player(playerName);
console.log(`\nHello, ${playerName}! Lets start...`);
const level = readline.question('\nChoose difficulty: Easy / Medium / Hard: ');   

for (const riddleData of AllRiddles.filter(r => r.difficulty.toLowerCase() === level.toLowerCase())) {
    let riddle;
    if (riddleData.choices) {
        riddle = new MultipleChoiceRiddle(
            riddleData.id,
            riddleData.name,
            riddleData.difficulty,
            riddleData.taskDescription,
            riddleData.correctAnswer,
            riddleData.choices
        );
    } else {
        riddle = new Riddle(
            riddleData.id,
            riddleData.name,
            riddleData.difficulty,
            riddleData.taskDescription,
            riddleData.correctAnswer
        );
    }
    const startTime = Date.now();
    console.log("\n------------------------------------------");
    riddle.ask();
    console.log("------------------------------------------\n");
    const endTime = Date.now();
    player.recordTime(startTime, endTime);
}

console.log("\n\n------------------------------------------");
console.log(`Game Results:`);
player.showStats();
console.log("------------------------------------------\n\n");

console.log("_____________________END_____________________\n");

