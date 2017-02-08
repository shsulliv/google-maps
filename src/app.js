// Tutorials drawn from:
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// https://www.sitepoint.com/find-a-route-using-the-geolocation-and-the-google-maps-api/
// Nautical styled map from: https://snazzymaps.com/style/92258/nautical-map

// const calculateRoute = require('./route');
//
// // Setting the buttons to change mode of transportation
// const controls = document.getElementById('controls');
//
// controls.addEventListener('click', event => {
//   event.preventDefault();
//   calculateRoute({ travelMethod: event.target.parentNode.value });
// });

// Setting an initialized route to 'Driving' on page load
// calculateRoute({ travelMethod: 'DRIVING' });

const { coordinates, MAP_OPTIONS } = require('./constants');
const { makeMap, renderMarker } = require('./map');
const geolocate = require('./geolocation');
const createRouter = require('./route');

window.onload = () => {
  const map = makeMap();
  const router = createRouter(map);
  renderMarker(coordinates.GOOGLE, 'green', map);

  geolocate(position => {
    map.setCenter(position);
    renderMarker(position, 'navy', map);
    router.route(position, coordinates.GOOGLE, 'DRIVING');

    document.getElementById('controls').addEventListener('click', (
      { target }
    ) => {
      router.route(position, coordinates.GOOGLE, target.parentNode.value);
    });
  });
};
