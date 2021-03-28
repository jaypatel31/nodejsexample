const fs = require("fs");

fs.readdirSync("./newDir").forEach(element => {
    fs.unlinkSync(`./newDir/${element}`);
});

fs.rmdir("./newDir", err => {
    if (err) {
        throw err;
    }
    console.log("removed Directory");
})