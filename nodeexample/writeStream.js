const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let writeStream;
rl.question("File Name >>", (data) => {
    writeStream = fs.createWriteStream(`./assets2/${data}.md`);
    process.stdout.write(`Type Exit to Stop writing File\n`);
    rl.question(">>", ansStored);
});

const ansStored = data => {

    if (data.toString().toLowerCase() == "exit") {
        process.exit();
    } else {
        writeStream.write(`\n${data}`);
        rl.question(`>>`, ansStored);
    }
}