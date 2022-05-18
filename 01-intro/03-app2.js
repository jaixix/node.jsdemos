const myutils = require('./03-utils');

const name = myutils.param1;
const add = myutils.addMethod(1,2);

console.log(name);
console.log(add);