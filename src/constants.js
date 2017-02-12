const styles = require('./map-style');

const coordinates = {
  GOOGLE: { lat: 51.5332408, lng: -0.1281903 } // Google London, King's Cross
};

const MAP_OPTIONS = {
  zoom: 10,
  center: coordinates.GOOGLE,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  mapTypeControl: false,
  fullscreenControl: false,
  styles
};

module.exports = { coordinates, MAP_OPTIONS };
