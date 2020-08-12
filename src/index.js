const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const markerMaker = require("./marker")

mapboxgl.accessToken = "pk.eyJ1IjoieXNvbG92eW92YSIsImEiOiJja2RxbzZwNHEwNmZ1MnpueTZjcHI4am45In0.tBV5akvzRF5nJu2sxclUmw";

const map = new mapboxgl.Map({
  container: "map", // your <div id="map"> element in the body in index.html
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  //zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newMarker = document.createElement("div"); // create new element in your DOM
newMarker.style.width = "32px"
newMarker.style.height = "39px"
newMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(newMarker).setLngLat([-74.009151, 40.705086]).addTo(map); // test to add Fullstack marker to the map
let marker = markerMaker('restaurant',[-87.641, 41.895]) // create new restaurant marker using the function markerMaker you imported in
marker.addTo(map); // add the restaurant marker to the map


