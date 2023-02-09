const name = require("./1-Names")
const sayHi = require("./2-Function")
const os = require('os');
const path = require('path')

const user = os.userInfo()
console.log(os.uptime());
console.log(path.sep);
