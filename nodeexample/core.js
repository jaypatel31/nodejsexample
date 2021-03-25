const path = require('path');
process.stdout.write(`\nDir Name : ${path.basename(__dirname)}\n\n`);

const util = require('util');
util.log('This console with time');

const v8 = require("v8");
util.log(v8.getHeapStatistics());