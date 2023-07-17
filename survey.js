const readline = require('readline');

const listOfQuestions = {
    0: 'What\'s your name',
    1: 'What\'s your favourtie activity',
    2: 'What do you listen to while doing that',
    3: 'Which meal is your favourite meal',
    4: 'What\'s your favourite thing to eat after this meal?',
    5: 'Which sport is your absolute favourite?',
    6: 'What is your superpower? In a few words, tell us what you are amazing at!'
}

const listOfAnswers = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: ""
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let x = 0;

const questions = function() {
    if (x < 7) {
        rl.question(`${listOfQuestions[x]}: `, (answer) => {
            listOfAnswers[x] = answer;
            x++;
            console.log();
            questions()
        });
    }
    else {
        rl.close()
        console.log("This is your new profile: ");
        setTimeout(() => {
            console.log(`${listOfAnswers[0]} likes ${listOfAnswers[1]}. ${listOfAnswers[0]} likes to listen to ${listOfAnswers[2]} while doing activities. ${listOfAnswers[0]} likes eating ${listOfAnswers[4]} after their favourite meal ${listOfAnswers[3]}. ${listOfAnswers[0]} likes to play ${listOfAnswers[5]}, and their superpower is ${listOfAnswers[6]}.`)
        }, 1500);
    }
}
questions();