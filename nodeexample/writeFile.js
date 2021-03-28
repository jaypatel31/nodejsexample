const fs = require("fs");

let md = `
    # Creating a new md File

    * MERN STACK
    * Javascript Base
    * Advanced JS
`;

fs.writeFile("./assets/notes.md", md.trim(), (err) => {
    if (err) {
        throw err;
    }
    console.log("Saved Sucessfully");
})