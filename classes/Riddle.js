import readline from 'readline-sync';

export default class Riddle {

    id;
    name;
    difficulty;
    taskDescription;
    correctAnswer;

    constructor(id, name, difficulty, taskDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.difficulty = difficulty; //"Easy", "Medium", "Hard"
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask() {
        let userAnswer;
        console.log(`Riddle ${this.id}: ${this.name}`);
        do {
            userAnswer = readline.question(`\n${this.taskDescription} -> `);
            if (userAnswer?.toLowerCase().trim() === String(this.correctAnswer).toLowerCase().trim()) {
                console.log("\nWell Done! You solve it!");
            } else {
                console.log("\nIncorrect. Try again!");
            }
        }
        while (userAnswer?.trim() !== String(this.correctAnswer || '').trim());
    }
}
