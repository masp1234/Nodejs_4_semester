const { tanks } = require('./tanks.json');

// In node, every file is a module
console.log(module);
function getTanks() {
    return tanks;
}

function addTank(tank) {
    tanks.push(tank);
    return tanks;
}

module.exports = {
    getTanks: getTanks,
    addTank: addTank
};