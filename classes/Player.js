export default class Player {

    #name;
    #times;

    constructor(name) {
        this.#name = name;
        this.#times = [];
    }
    recordTime(start, end) {
        this.#times.push((end-start)/1000);
    }
    showStats(){
        const totalTime = this.#times.reduce((total, current) => total + current, 0);
        const averageTime = totalTime / this.#times.length;
        console.log(`\nGreat job, ${this.#name}!`);
        console.log(`\nTotal time: ${totalTime} seconds`);
        console.log(`\nAverage per riddle: ${averageTime} seconds`);
    }
}
