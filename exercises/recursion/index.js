// npm init -y tworzy plik json
// npm install chalk --save    instaluje chalk dokladnie w moim json pliku

const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        "2": "congratulations!"
                    }
                },
                right: "This was not the right choice. Goodbye!"
            }
        },
        no: "Alright then. Enjoy your day!"
    }
};

function askQuestionCyan(convoObj) {
    rl.question(chalk.cyan(convoObj.q), answer => {
        if (typeof convoObj.answers[answer] == "undefined") {
            askQuestionCyan(convoObj);
        } else if (typeof convoObj.answers[answer] == "string") {
            console.log(chalk.green(convoObj.answers[answer]));
            rl.close();
        } else if (typeof convoObj.answers[answer] == "object") {
            askQuestionCyan(convoObj.answers[answer]);
        }
    });
}

//askQuestionCyan(story);

function askQuestionRed(convoObj) {
    rl.question(chalk.red(convoObj.q), answer => {
        if (typeof convoObj.answers[answer] == "undefined") {
            askQuestionRed(convoObj);
        } else if (typeof convoObj.answers[answer] == "string") {
            console.log(chalk.green(convoObj.answers[answer]));
            rl.close();
        } else if (typeof convoObj.answers[answer] == "object") {
            askQuestionRed(convoObj.answers[answer]);
        }
    });
}

function askQuestionGreen(convoObj) {
    rl.question(chalk.green(convoObj.q), answer => {
        if (typeof convoObj.answers[answer] == "undefined") {
            askQuestionGreen(convoObj);
        } else if (typeof convoObj.answers[answer] == "string") {
            console.log(chalk.green(convoObj.answers[answer]));
            rl.close();
        } else if (typeof convoObj.answers[answer] == "object") {
            askQuestionGreen(convoObj.answers[answer]);
        }
    });
}

function beforeAskQuestions() {
    rl.question(
        "Before you start game choose color of questions:\n cyan\n red\n green\n",
        color => {
            if (typeof color == "undefined") {
                beforeAskQuestions();
            } else if (color == "cyan") {
                console.log("You choosed cyan\n");
                askQuestionCyan(story);
            } else if (color == "red") {
                console.log("You choosed red\n");
                askQuestionRed(story);
            } else if (color == "green") {
                console.log("You choosed green\n");
                askQuestionGreen(story);
            }
        }
    );
}

beforeAskQuestions();
