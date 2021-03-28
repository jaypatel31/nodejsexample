const fs = require("fs");

if (fs.existsSync("newDir")) {
    console.log("Directory Already Exist.")
} else {
    fs.mkdir("newDir", (err) => {
        if (err) {
            throw err;
        }
        console.log("Directory Created");
    })
}