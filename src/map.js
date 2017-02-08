const { MAP_OPTIONS } = require('./constants');

const makeMap = (id = 'map', options = MAP_OPTIONS) =>
  new google.maps.Map(document.getElementById(id), options);

const renderMarker = (position, color, map) => new google.maps.Marker({
  position,
  map,
  icon: `img/map-pin_${color}.svg`
});

module.exports = { makeMap, renderMarker };
