console.log("Inside utils.js!");

const name="Andrew MF";

const add = function(a,b){
    return a+b;
}

module.exports = {
    param1 : name,
    addMethod : add
}