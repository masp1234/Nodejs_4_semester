const birds = [
    {
        id: 1,
        name: "Dove"
    },
    {
        id: 2,
        name: "Hummingbird"
    },
    {
        id: 3,
        name: "Seagull"
    }
]


console.log(birds.filter(bird => true))
console.log(birds.filter(bird => false))
console.log(birds.find(bird => true))
console.log(birds.find(bird => false))