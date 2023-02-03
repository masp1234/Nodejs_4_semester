// Const rule 1: Have to assign a value when declaring
// const me;



const me = {
    name: "Hans"
}
me.name = "dssf";
console.log(me);

const hobbies = ["Football", "Swimming"]
hobbies.push("Cooking");
me.hobbies = hobbies;
console.log(me);

const hobbyOne = "Football";
const hobbyTwo = 'Swimming';

// string interpolation - selve strengen hedder String template literal
// det der sker inde i ${} hedder interpolation (string interpolation?) resten are bare string literal
const hobbyThree = `Cooking skill level ${2 + 2}`
// Const rule 2: cannot reassign to a const

