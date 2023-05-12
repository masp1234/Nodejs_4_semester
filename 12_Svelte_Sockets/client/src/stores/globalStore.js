import { writable, readable } from 'svelte/store'


const BASE_URL = readable("http://localhost:8080");
const myUsername = writable();
console.log(myUsername)


export {
    BASE_URL,
    myUsername
}