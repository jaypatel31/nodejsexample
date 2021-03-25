const waitInterval = 5000;
const settInterval = 100;
let currentTime = 0;
let pr = 0;
const setter = () => {
    currentTime += settInterval;
    pr = Math.floor((currentTime / waitInterval) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Processing... ${pr}%`);
}
const waiter = () => {
    clearInterval(stinterval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("DONE!! \nThanks for your Patience.");
}
const stinterval = setInterval(setter, settInterval);
setTimeout(waiter, waitInterval);
console.log(`Setting Time out for ${waitInterval/1000}s`);