const rocks = [
    { name: "Led Zeppelin", age: 50},
    { name: "Dwayne Johson", age: 47, test: "hello1" },
    { name: "Neptune", age: 100_000_000_000, test: "hello2" }
];

console.log ( {...rocks[0] });

// loop methods: map, filter, find, forEach, reduce, sort

const rocksAgedOneYear = rocks.map(rock => ( {name: rock.name, age: rock.age += 1} ))


// not referential transparent -- modifies the rocks array
// code smell: side effect
// don't use
const rocksAgedOneYear2 = rocks.map(rock => {
    rock.age += 1;
    return rock; 
})
const rockAgedOneYear3 = rocks.map(rock => {
    return { ...rock, age: rock.age + 1 }
});

console.log(rocksAgedOneYear);
console.log(rocks);

console.log(rocksAgedOneYear2);



const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0);

console.log(evenAgedRocks);
