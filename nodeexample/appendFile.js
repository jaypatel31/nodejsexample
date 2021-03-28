const colorData = require("./assets/colors.json");
const fs = require("fs");

colorData.colorList.forEach(c => {
    fs.appendFile("./newDir/colors.md", `${c.color}: ${c.hex}\n`, (err) => {
        if (err) {
            throw err;
        }
    })
})