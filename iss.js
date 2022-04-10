const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISS(){
    const response = await fetch(api_url);
    const data = await response.json();

    const {latitude, longitude, altitude} = data;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
    document.getElementById('alt').textContent = altitude;


    // create a map object via the leaflet js library
    // setView has two parameters lat and long. plus zoom level.
    var map = L.map('map').setView([latitude, longitude, altitude], 3);

    const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attriibution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    const tiles = L.tileLayer(tileURL, {attriibution});
    
    tiles.addTo(map);

    var marker = L.marker([latitude, longitude]).addTo(map);




}

