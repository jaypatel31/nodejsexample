const fs = require("fs");

fs.readFile("./assets/colors.json", (err, json) => {
    if (err) {
        console.log(`Error has Occured: ${err.message}`)
        process.exit();
    }
    console.log(JSON.parse(json));
})