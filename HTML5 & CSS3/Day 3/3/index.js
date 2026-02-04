/**
 * {
  coords: {
    latitude: number,         // Decimal degrees
    longitude: number,        // Decimal degrees
    altitude: number | null,  // Meters above sea level (null if unavailable)
    accuracy: number,         // Meters, accuracy of latitude/longitude
    altitudeAccuracy: number | null, // Meters, accuracy of altitude (null if unavailable)
    heading: number | null,   // Degrees clockwise from true north (null if unavailable)
    speed: number | null      // Meters per second (null if unavailable)
  },
  timestamp: DOMTimeStamp     // Milliseconds since epoch when position was retrieved
}
 *  **/


let bottomElement = document.querySelector(".bottom");
let mapElement = document.getElementById("map");
let detailedElement = document.querySelector(".detailed");
let latOutput = document.getElementById("lat");
let longOutput = document.getElementById("long");
let accOutput = document.getElementById("acc");
let timeOutput = document.getElementById("time");
let lat;
let long;
let timestamp;
let acc;

window.addEventListener("load", getLocation)

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
    } else {
        bottomElement.innerText = "your browser doesnt support location";
    }
}

function onSuccess(data){
    lat = data.coords.latitude;
    long = data.coords.longitude;
    acc = data.coords.accuracy;
    timestamp = data.timestamp;
}

function onFailure(){
    bottomElement.innerText = "couldnt get ur loc";
}

function displayMap(e){
    if (lat != undefined) {
        let location = new google.maps.LatLng(lat,long);
        let specs = {zoom: 15, center: location}
        new google.maps.Map(mapElement, specs)
        detailedElement.style["display"] = "none";
        mapElement.style["display"] = "flex";
    }
}

function showDetailedInfo(e){
    if (lat != undefined) {
        latOutput.innerText = lat;
        longOutput.innerText = long;
        accOutput.innerText = acc;
        timeOutput.innerText = new Date(timestamp);
        mapElement.style["display"] = "none";
        detailedElement.style["display"] = "flex";
    }
}