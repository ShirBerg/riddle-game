import Riddle from "./Riddle.js";
import readline from 'readline-sync';

export default class MultipleChoiceRiddle extends Riddle {

    choices;

    constructor(id, name, difficulty, taskDescription, correctAnswer, choices) {
        super(id, name, difficulty, taskDescription, correctAnswer);
        this.choices = choices;
    }
    ask() {

        let userAnswer;
        let isCorrect = false;

        console.log(`\nRiddle ${this.id}: ${this.name}`);
        do {
            console.log(`\n${this.taskDescription}`);

            this.choices.forEach((choice, index) => {
                console.log(`${index + 1}. ${choice}`);
            });
            userAnswer = readline.question("\nChoose the correct option number -> ");
            const selectedIndex = parseInt(userAnswer) - 1;
            if (selectedIndex >= 0 && selectedIndex < this.choices.length) {
                if (this.choices[selectedIndex]?.trim() === this.correctAnswer?.trim()) {
                    isCorrect = true;
                }
            }
            if (userAnswer?.trim() === this.correctAnswer.trim() || isCorrect) {
                console.log("\nWell Done! You solve it!");
            } else {
                console.log("\nIncorrect. Try again!");
            }
        }
        while (userAnswer?.trim() !== this.correctAnswer.trim() && !isCorrect);
    }
}
