const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Favourite Programming Language > ", ans => {
    console.log(`${ans} is so simplified that everybody is loving it.`);
});