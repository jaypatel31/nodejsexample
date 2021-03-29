const fs = require("fs");

const readStream = fs.createReadStream("./assets2/lorum-ipsum.md", "UTF-8");

readStream.on("data", data => {
    console.log(`I read ${data.length-1} characters`);
})

readStream.once("data", data => {
    console.log(`First Bit Of data:`)
    console.log(data);
})