const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const collectAnswer = (question, done = f => f) => {
    const answer = [];
    const [fQ] = question;

    const ansStored = (ans) => {
        answer.push(ans);
        if (answer.length < question.length) {
            rl.question(question[answer.length] + " > ", ansStored)
        } else {
            done(answer);
        }
    }
    rl.question(fQ + " > ", ansStored);
}
module.exports.collectAnswer = collectAnswer;