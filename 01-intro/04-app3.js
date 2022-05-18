// const validator = require('validator');
import validator from 'validator';

console.log(validator.isEmail('jai@gmail.com'));
console.log(validator.isEmail('jai@gmail'));
console.log(validator.isEmail('@gmail.com'));

console.log(validator.isMobilePhone("9920750554"));
console.log(validator.isMobilePhone("9920554s"));

