import jokes from "./jokes.json" assert { type: "json" };

console.log(jokes);



const getJokes = () => {
    return jokes;
};

export {
    getJokes
}