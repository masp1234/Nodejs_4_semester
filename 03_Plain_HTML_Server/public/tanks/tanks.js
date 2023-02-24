// can use /api/tanks because it's local??
const url = 'http://localhost:8080/api';

const fetchData = async (url, settings) => {
    let response = await fetch(url, settings);
    let data = await response.json();
    return data;
}

const getTanks = async () => {
    settings = {
        method: "GET"
    }
    return await fetchData(url + "/tanks", settings)
    
}

const renderTanks = async () => {
    const tanks = await getTanks();
    const container = document.getElementById('container');

    // foreach - only use when you don't care about returning anything / dont care about the data, like in this case;
    tanks.forEach(tank => {
        // cross-side scripting(XSS). innerHTML is dangerous because it allows js to be run inside the innerhtml. Use something else or sanitize it
        const tankDiv = document.createElement('div');
    
        const tankName = document.createElement('p');
        tankName.innerText = tank.name || 'No name';
        const tankNationality = document.createElement('p');
        tankNationality.innerText = tank.nationality || 'No nationality';
        tankDiv.appendChild(tankName);
        tankDiv.appendChild(tankNationality);
        container.appendChild(tankDiv);

        const breakBr = document.createElement('br');
        tankDiv.append(breakBr);

    })
}

renderTanks();