export const guards = [
    "Hank the tank",
    "Thomas the tank engine",
    "CEPOS"

];

function getGuards() {
    return guards;
}

export function addGuard(guard) {
    guards.push(guard);
    return guards;
}


