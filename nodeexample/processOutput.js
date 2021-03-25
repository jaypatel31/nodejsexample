const question = [
    "What is your Name?",
    "What is your profession?",
    "What is your Favourite programming lanuguage?"
];

const ask = (i = 0) => {
    return process.stdout.write(`\n\n ${question[i]} > `);
}

const storeData = data => {
    ans.push(data);
    if (ans.length < question.length) {

        ask(ans.length);
    } else {
        process.exit();
    }
}
ask();

const ans = [];

process.stdin.on("data", data => {
    storeData(data.toString().trim());
})

process.on("exit", () => {
    process.stdout.write("\n\nThanks For your valuable time :)\nYour responses are:\n\n")
    for (var i = 0; i < ans.length; i++) {
        process.stdout.write(`\n${question[i]} > ${ans[i]}\n`);
    }
    process.stdout.write(`\n\n`);
})