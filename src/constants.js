const styles = require('./map-style');

// Google London, King's Cross
const GOOGLE_COORDS = { lat: 51.5332408, lng: -0.1281903 };

const MAP_OPTIONS = {
  zoom: 10,
  center: GOOGLE_COORDS,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  mapTypeControl: false,
  fullscreenControl: false,
  styles
};

module.exports = { GOOGLE_COORDS, MAP_OPTIONS };
