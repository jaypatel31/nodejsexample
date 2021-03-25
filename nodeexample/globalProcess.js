let grab = flag => {
    let value = process.argv.indexOf(flag) + 1;
    return process.argv[value];
}

let name = grab("--user");
let hr = new Date().getHours();
let time = (hr >= 12) ? (hr >= 17 ? "Afternoon" : "Evening") : "Morning";
console.log(process.argv);
console.log(`Good ${time} ${name}`);