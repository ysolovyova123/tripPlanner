const mapboxgl = require("mapbox-gl");

function markerMaker (type, coordArray) {
  let marker = document.createElement("div")
  marker.style.width = "32px"
  marker.style.height = "39px"

  if (type === 'hotel') {
    marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
    return new mapboxgl.Marker(marker).setLngLat(coordArray)
  };
  if (type === 'restaurant') {
    marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
    return new mapboxgl.Marker(marker).setLngLat(coordArray)
  };
  if (type === 'activity') {
    marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
    return new mapboxgl.Marker(marker).setLngLat(coordArray)
  }
};

module.exports = markerMaker // for some reason can't use brackets here


// const newMarker = document.createElement("div"); // create new element in your DOM
// newMarker.style.width = "32px"
// newMarker.style.height = "39px"
// newMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(newMarker).setLngLat([-74.009151, 40.705086]).addTo(map);
