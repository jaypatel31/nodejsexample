const fs = require("fs");

fs.renameSync("./assets/newNotes.md", "./assets/nNotes.md");

fs.rename('./assets/nNotes.md', './newDir/nNotes.md', (err) => {
    if (err) {
        throw err;
    }
})

setTimeout(() => {
    fs.unlink("./assets/alex.jpg");
}, 4000);