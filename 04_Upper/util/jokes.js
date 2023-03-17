// https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit

import Sentiment from "sentiment";
const sentiment = new Sentiment();


const getJoke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
    const result = await response.json();
    

    const jokeToAnalyse = result.joke || `${result.setup} ${result.delivery}`
    const { score } = sentiment.analyze(jokeToAnalyse);
    if (score < 0) {
        return await getJoke();
    }
    else {
        return result;
    }
}

export {
    getJoke
} 