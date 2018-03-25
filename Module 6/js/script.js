const keyTrainer = { 
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: 0,
    setCharCount: function() {
        do {
            this.charCount = parseInt(prompt("Введите число"));
        } while (this.checkPositiveInteger(this.charCount) === false);
    },
    checkPositiveInteger: function(num) {
        return num > 0;
    },
    task: [],
    createTask: function() {
        this.task = [];
        for (let i = 0; i < this.charCount; i++) {
            let index = Math.floor(Math.random() * this.chars.length);
            this.task.push(this.chars[index]);
        }
    },
    userInput: '',
    userErrors: 0,
    startTask: function() {
        this.userInput = prompt("Наберите " + this.task.join(""));
        this.userErrors = 0;
        for (let i = 0; i < this.charCount; i++) {
            if (this.userInput[i] !== this.task[i])  {
                this.userErrors++;
            }
        }
        if (this.userErrors === 0) {
            console.log("Поздравляю, все верно!");
        } else {
            console.log("У вас " + this.userErrors + " ошибок. Попробуйте снова!");
        }
    }
}

function run() {
    keyTrainer.setCharCount();
    keyTrainer.createTask();
    keyTrainer.startTask();
}

run();