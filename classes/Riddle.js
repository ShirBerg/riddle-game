import readline from 'readline-sync';

export default class Riddle {

    id;
    name;
    taskDescription;
    correctAnswer;

    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask() {
        let userAnswer;
        console.log(`Riddle ${this.id}: ${this.name}`);
        do {
            userAnswer = readline.question(`\n${this.taskDescription} -> `);
            if (userAnswer.trim() === this.correctAnswer.trim()) {
                console.log("\nWell Done! You solve it!");
            } else {
                console.log("\nIncorrect. Try again!");
            }
        }
        while (userAnswer.trim() !== this.correctAnswer.trim());
    }
}
