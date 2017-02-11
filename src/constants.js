const styles = require('./map-style');

const coordinates = {
  MAP_CENTER: { lat: 51.5074, lng: 0.1278 }, // Center initialized to London
  GOOGLE: { lat: 51.5332408, lng: -0.1281903 } // Google London, King's Cross
};

const MAP_OPTIONS = {
  zoom: 10,
  center: coordinates.MAP_CENTER,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  mapTypeControl: false,
  fullscreenControl: false,
  styles
};

module.exports = { coordinates, MAP_OPTIONS };
