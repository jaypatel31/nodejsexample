const questionSetter = require("./lib/question_answer");

const question = [
    "What is your Name?",
    "What is your profession?",
    "What is your Favourite programming lanuguage?"
];

questionSetter.collectAnswer(question, answer => {
    console.log("Thanks For Your Response :)");
    console.log(answer);
    process.exit();
})