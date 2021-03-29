const cp = require("child_process");

cp.exec("dir", (err, data, stderr) => {
    if (err) {
        console.log(stderr);
    } else {
        console.log(data);
    }
})