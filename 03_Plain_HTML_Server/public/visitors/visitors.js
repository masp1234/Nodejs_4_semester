
const url = 'http://localhost:8080/api';

const fetchData = async (url, settings) => {
    let response = await fetch(url, settings);
    let data = await response.json();
    return data;
}

const getVisitorCount = async() => {
    
    settings = {
        method: "GET"
    }
    return await fetchData(url + "/visitors", settings)

    
}


const writeInVisitorLog = async() => {
    settings = {
        method: "PUT"
    }
    await fetchData(url + "/visitors", settings);

    const count = await getVisitorCount();
    const visitorCount = document.getElementById('visitor-count');
    visitorCount.innerText = count.data;
    
}
